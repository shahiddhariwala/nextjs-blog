const skills = [
    'Java',
    'Spring Boot',
    'React',
    'Next.js',
    'Node.js',
    'Angular',
    'PHP'
]

export default function Skills() {
    return (
        <section className="section" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="section-title">
                Skills
            </h2>
            <ul className="skill-list">
                {skills.map((skill) => (
                    <li key={skill} className="skill">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}
