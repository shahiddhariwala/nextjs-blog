const skills = [
    'React',
    'Next.js',
    'Node.js',
    'Java',
    'Spring Boot',
    'Angular',
    'PHP'
]

export default function Skills() {
    return (
        <section className="section" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="section-title">
                Stack
            </h2>
            <p className="stack-line">
                {skills.map((skill, i) => (
                    <span key={skill}>
                        {skill}
                        {i < skills.length - 1 ? ' · ' : ''}
                    </span>
                ))}
            </p>
        </section>
    )
}
