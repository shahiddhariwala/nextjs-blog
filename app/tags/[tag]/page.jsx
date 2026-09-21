import Link from 'next/link'
import { notFound } from 'next/navigation'
import PostCard from '../../../components/PostCard'
import { getAllTags, getPostsByTag } from '../../../lib/posts'

export async function generateStaticParams() {
    return getAllTags().map((tag) => ({ tag }))
}

export async function generateMetadata({ params }) {
    const { tag } = await params
    return {
        title: `Posts tagged #${tag}`
    }
}

export default async function TagPage({ params }) {
    const { tag } = await params
    const posts = getPostsByTag(tag)

    if (!posts.length) {
        notFound()
    }

    return (
        <section className="section">
            <h1 className="page-title">#{tag}</h1>
            <p className="page-subtitle">
                {posts.length} post{posts.length === 1 ? '' : 's'} tagged
            </p>
            <div className="post-list">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
            <div className="back-link">
                <Link href="/">← Back to all posts</Link>
            </div>
        </section>
    )
}
