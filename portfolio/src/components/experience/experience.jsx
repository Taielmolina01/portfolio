import './experience.scss'

function ExperienceDescription({ text }) {
    const blocks = [];
    let list = null;

    String(text ?? '').split('\n').forEach((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('- ')) {
            if (!list) {
                list = [];
                blocks.push({ type: 'ul', items: list });
            }
            list.push(trimmed.slice(2));
        } else {
            list = null;
            if (trimmed) {
                blocks.push({ type: 'p', text: trimmed });
            }
        }
    });

    return (
        <>
            {blocks.map((block, index) => (
                block.type === 'ul'
                    ? (
                        <ul className='description-container' key={index}>
                            {block.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )
                    : <p key={index}>{block.text}</p>
            ))}
        </>
    );
}

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
                        <ExperienceDescription text={value.description} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience;
