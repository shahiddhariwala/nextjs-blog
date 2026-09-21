import Link from 'next/link'
import Date from './Date'
import Tag from './Tag'

export default function PostCard({ post }) {
    return (
        <article className="post-card">
            <h3 className="post-card-title">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h3>
            {post.summary ? (
                <p className="post-card-summary">{post.summary}</p>
            ) : null}
            <div className="post-card-meta">
                <Date dateString={post.date} />
                <div className="tag-row">
                    {(post.tags || []).map((tag) => (
                        <Tag key={tag} tag={tag} />
                    ))}
                </div>
            </div>
        </article>
    )
}
