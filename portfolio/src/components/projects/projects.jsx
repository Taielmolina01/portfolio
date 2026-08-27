import './projects.scss'

function Projects({ id, title, subtitle, projects }) {
    return (
        <div 
            id={id}
            className='projects-container'
        >
            <h3>
                {title}
            </h3>
            <h4>
                {subtitle}
            </h4>
            <div>
                {projects.map((value, i) => (
                    <div className='project-item' key={i}>
                        <h5>
                            {value.name}
                        </h5>
                        <p>
                            {value.description}
                        </p>
                        <div className='stack-container'>
                            {value.stack.map((secondValue, j) => (
                                <div key={j}>
                                    {secondValue}
                                </div>
                            ))}
                        </div>
                        <div className='links-container'>
                            <h6>
                                Links
                            </h6>
                            <ul>
                            {value.links.map((link, k) => (
                                <li>
                                    <a 
                                        href={link}
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        key={k}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;