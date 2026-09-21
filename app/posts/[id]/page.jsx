import Link from 'next/link'
import { notFound } from 'next/navigation'
import Date from '../../../components/Date'
import Tag from '../../../components/Tag'
import { getAllPostIds, getPostData } from '../../../lib/posts'

export async function generateStaticParams() {
    return getAllPostIds()
}

async function getPost(id) {
    try {
        return await getPostData(id)
    } catch {
        return null
    }
}

export async function generateMetadata({ params }) {
    const { id } = await params
    const postData = await getPost(id)

    if (!postData) {
        return {}
    }

    return {
        title: postData.title,
        description: postData.summary
    }
}

export default async function PostPage({ params }) {
    const { id } = await params
    const postData = await getPost(id)

    if (!postData) {
        notFound()
    }

    return (
        <article className="post">
            <header className="post-header">
                <h1 className="post-title">{postData.title}</h1>
                <p className="post-source">source: posts/{postData.id}.md</p>
                <div className="post-meta">
                    <Date dateString={postData.date} />
                    <div className="tag-row">
                        {(postData.tags || []).map((tag) => (
                            <Tag key={tag} tag={tag} />
                        ))}
                    </div>
                </div>
            </header>
            <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
            <div className="back-link">
                <Link href="/">← Back to home</Link>
            </div>
        </article>
    )
}
