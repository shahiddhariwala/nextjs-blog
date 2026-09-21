import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import Skills from '../components/Skills'
import { getAllTags, getSortedPostsData } from '../lib/posts'

export default function HomePage() {
    const posts = getSortedPostsData()
    const tags = getAllTags()

    return (
        <>
            <Hero />
            <section className="ledger" aria-label="Build manifest">
                <p className="ledger-title">
                    ▲ next build · compiled once, served every time
                </p>
                <p className="ledger-row">
                    <span className="ok">✓</span> /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                    {posts.length} posts
                </p>
                <p className="ledger-row">
                    <span className="ok">✓</span> /tags/[tag]&nbsp;&nbsp; {tags.length} tags
                </p>
            </section>
            <Skills />
            <section className="section" id="blog" aria-labelledby="blog-heading">
                <h2 id="blog-heading" className="section-title">
                    Writing
                </h2>
                <div className="post-list">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </section>
        </>
    )
}
