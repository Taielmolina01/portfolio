import './roadmapItem.scss'

function RoadMapItem({ id, title }) {
    return (
        <div className='roadmap-item-container'>
            <div className='bar'></div>
            <a href={`#${id}`}>
                {title.toUpperCase()}
            </a>
        </div>
    )
}

export default RoadMapItem;