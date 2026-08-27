import './contact.scss';
import { ArrowUpRight } from 'lucide-react';

function Contact({ id, title, paragraph }) {
    const email = 'taielmolina0101@gmail.com';

    return (
        <div 
            id={id}
            className='subsection-container'
        >
            <h3>
                {title}
            </h3>
            <p>{paragraph}</p>
            <a
            href={email}
            target='_blank'
            >
                {email}
                <ArrowUpRight />
            </a>
        </div>
    )
}

export default Contact;