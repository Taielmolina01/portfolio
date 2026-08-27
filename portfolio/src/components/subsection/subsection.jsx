import './subsection.scss'

function Subsection({ id, title, paragraph }) {
    const paragraphLines = String(paragraph ?? '').split('\n');

    return (
        <div 
            id={id}
            className='subsection-container'
        >
            <h3>
                {title}
            </h3>
            <p>
                {paragraphLines.map((line, index) => (
                    <span key={index}>
                        {line}
                        {index < paragraphLines.length - 1 && <br />}
                    </span>
                ))}
            </p>
        </div>
    )
}

export default Subsection;