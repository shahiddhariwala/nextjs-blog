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
            <p className="hero-eyebrow">// frontend developer — writing since 2020</p>
            <h1 className="hero-title">Shahid Dhariwala</h1>
            <p className="hero-bio">
                I build websites with React and Next.js, and I write about how
                the web renders. Backend when I must — Java, Spring Boot,
                Node.js.
            </p>
            <div className="hero-links">
                <a
                    className="btn btn-primary"
                    href="https://github.com/shahiddhariwala"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub ↗
                </a>
                <a
                    className="btn"
                    href="https://www.linkedin.com/in/shahiddhariwala/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn ↗
                </a>
                <a className="btn" href="#blog">
                    read the writing ↓
                </a>
            </div>
        </section>
    )
}
