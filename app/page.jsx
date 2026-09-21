import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import Skills from '../components/Skills'
import { getSortedPostsData } from '../lib/posts'

export default function HomePage() {
    const posts = getSortedPostsData()

    return (
        <>
            <Hero />
            <Skills />
            <section className="section" id="blog" aria-labelledby="blog-heading">
                <h2 id="blog-heading" className="section-title">
                    Blog
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
