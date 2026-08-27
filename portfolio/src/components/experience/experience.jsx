import './experience.scss'

function Experience({ id, title, experience }) {
    return (
        <div 
            id={id}
            className='experience-container'
        >
            <h3>
                {title}
            </h3>
            {experience.map((value, index) => (
                <div className='experience-item' key={index}>
                    <div>
                        <h5>{value.startDate} - {value.endDate}</h5>
                    </div>
                    <div>
                        <h4>
                            {value.role} <span className='circle' /> <span className='enterprise'>{value.enterprise}</span>
                        </h4>
                        <p>
                            {value.description}
                    </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience;