import './stack.scss'

function Stack({ id, title, subtitle, stack }) {
    return (
        <div
            id={id} 
            className='stack-container'
        >
            <h3>
                {title}
            </h3>
            <h4>
                {subtitle}
            </h4>
            <div className='stack-subcontainer'>
                {stack.map((value, i) => (
                    <div key={i}>
                        <h5>
                            {value.type}
                        </h5>
                        <ul>
                        {value.listTypes.map((subvalue, j) => (
                            <li key={j}>
                                {subvalue}
                            </li>
                        ))
                        }
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stack;