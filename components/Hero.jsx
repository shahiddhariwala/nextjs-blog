import Image from 'next/image'
import profilePic from '../public/images/profile.png'

export default function Hero() {
    return (
        <section className="hero">
            <Image
                src={profilePic}
                alt="Shahid Dhariwala"
                className="hero-avatar"
                width={112}
                height={112}
                priority
                placeholder="blur"
            />
            <p className="hero-eyebrow">Frontend Developer</p>
            <h1 className="hero-title">Hi, I&apos;m Shahid Dhariwala</h1>
            <p className="hero-bio">
                I build websites and web applications with React and Next.js. I
                have professional experience with Java, Spring Boot, and
                Node.js, and I write about what I learn along the way.
            </p>
            <div className="hero-links">
                <a
                    className="btn btn-primary"
                    href="https://github.com/shahiddhariwala"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
                <a
                    className="btn"
                    href="https://www.linkedin.com/in/shahiddhariwala/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                <a className="btn" href="#blog">
                    Read the blog
                </a>
            </div>
        </section>
    )
}
