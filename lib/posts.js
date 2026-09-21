import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'posts')

export function slugifyTag(tag) {
    return tag.toLowerCase().trim().replace(/\s+/g, '-')
}

function getPostFileNames() {
    return fs
        .readdirSync(postsDirectory)
        .filter((fileName) => fileName.endsWith('.md'))
}

export function getSortedPostsData() {
    const allPostsData = getPostFileNames().map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data,
            tags: (matterResult.data.tags || []).map(slugifyTag)
        }
    })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostIds() {
    return getPostFileNames().map((fileName) => ({
        id: fileName.replace(/\.md$/, '')
    }))
}

export function getAllTags() {
    const tags = getSortedPostsData().flatMap((post) => post.tags || [])
    return [...new Set(tags)].sort()
}

export function getPostsByTag(tag) {
    return getSortedPostsData().filter((post) => (post.tags || []).includes(tag))
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(matterResult.content)

    return {
        id,
        contentHtml: processedContent.toString(),
        ...matterResult.data,
        tags: (matterResult.data.tags || []).map(slugifyTag)
    }
}
