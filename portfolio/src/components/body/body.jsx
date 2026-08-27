import './body.scss';
import Subsection from './../subsection/subsection';
import { useState } from 'react';
import Toggle from '../toggle/toggle';
import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './../icons/icons';
import Experience from '../experience/experience.jsx';
import Projects from '../projects/projects.jsx';
import Stack from '../stack/stack.jsx';
import { ExperienceClass, ExperienceItem } from '../experience/experience.js';
import StackClass from '../stack/stack.js';
import { ProjectClass, ProjectSection } from '../projects/project.js';
import Contact from '../contact/contact';
import RoadMapItem from '../roadmapItem/roadmapItem';
import RoadMapItemClass from '../roadmapItem/roadmapItemClass';

const linkedinURL = 'https://www.linkedin.com/in/taiel-molina-189149231/';
const githubURL = 'https://github.com/Taielmolina01';
const aboutId = 'about-section';
const experienceId = 'experience-section';
const stackId = 'stack-section';
const projectsId = 'projects-section';
const contactId = 'contact-section';
const moneyLandeuringLink = ['https://github.com/Taielmolina01/money-laundering-analysis'];
const cs2dLink = ['https://github.com/Taielmolina01/counter-strike-2d'];
const melodiaLinks = ['https://github.com/Taielmolina01/melodia-users', 'https://github.com/Taielmolina01/catalog-library-ms']
const cvEs = '../public/CV_TaielMolina_es.pdf'
const cvEn = '../public/CV_TaielMolina_en.pdf'

function Body() {   
    const [lang, setLang] = useState('en');

    const firstSection = {
        "en": [
            "I build software products focusing on make a scalable, reliable and clean solution.",
            "Buenos Aires, Argentina",
            "Open to new opportunities",
            "Download CV"
        ],
        "es": [
            "Creo productos haciendo foco en obtener una solución limpia, escalable y confiable.",
            "Buenos Aires, Argentina",
            "Disponible para nuevas oportunidades",
            "Descargar CV"
        ]
    }

    const subsections = 
    { 
        "en": [
            {
                "title": "About",
                "paragraph": "I am a Software Engineering student at UBA, just three course away from graduating. I love build clear interfaces on top of a solid backend architecture.\n\n For over a year I have worked as a full-stack developer, taking part in the full product lifecycle: from data modelling and APIs to the interface people actually use.\n\n Since March 2023 I have also been a teaching assistant of the 'Algorithms and Data Structures' course at UBA, where we teach computational complexity and data structures (stacks, queues, linked-list, hash table, trees, BST, heaps, graphs).",
            },
            {
                "title": "Contact me",
                "paragraph": "If you would like to talk about a project or a job opportunity, drop me a line.",
            }
        ],
        "es": [
            {
                "title": "Sobre mí",
                "paragraph": "Soy estudiante de Ingeniería en Sistemas en la UBA, a tres materias de recibarme. Me encanta crear interfaces claras sobre una arquitectura backend sólida.\n\n Durante más de un año trabajé como desarrollador full-stack, participando en todo el ciclo de vida del producto: desde el modelado de datos y las APIs hasta la interfaz que la gente realmente usa.\n\n Desde marzo de 2023 también soy ayudante de cátedra del curso de 'Algoritmos y Estructuras de Datos' en la UBA, donde enseñamos complejidad computacional y estructuras de datos (pilas, colas, listas enlazadas, tablas hash, árboles, BST, heaps, grafos).",
            },
            {
                "title": "Contacto",
                "paragraph": "Si te gustaría hablar sobre un proyecto o una oportunidad laboral, escribime.",
                "variant": "contact"
            }
        ]
    }

    const experience = {
        'en': new ExperienceClass(
            'Experience',
            [
            new ExperienceItem(
                'OCT 2025',
                'PRESENT',
                'Full Stack Developer',
                'Alkemy',
                'End-to-end feature development',
                ['React', 'Node', 'Nest', 'MariaDB', 'MongoDB']
            ),
            new ExperienceItem(
                'MAR 2023',
                'PRESENT',
                'Teaching Assistant',
                'Universidad de Buenos Aires',
                'Teaching about algorithms and data structures',
                ['Teaching', 'Algorithms', 'Data structures', 'Computational complexity']
            )
            ]
        ),
        'es': new ExperienceClass(
            'Experiencia',
            [
            new ExperienceItem(
                'OCT 2025',
                'PRESENTE',
                'Full Stack Developer',
                'Alkemy',
                'Desarrollo de funcionalidades de extremo a extremo',
                ['React', 'Node', 'Nest', 'MariaDB', 'MongoDB']
            ),
            new ExperienceItem(
                'MAR 2023',
                'PRESENTE',
                'Ayudante de cátedra',
                'Universidad de Buenos Aires',
                'Enseñanza sobre algoritmos y estructuras de datos',
                ['Docencia', 'Algoritmos', 'Estructuras de datos',  'Complejidad computacional']
            )
            ]
        ),
    }

    const stackByType = [
        new StackClass(
            'FRONTEND', 
            [
            'React',
            'JavaScript',
            'TypeScript',
            'Vue'
            ]
        ),
        new StackClass(
            'BACKEND',
            [
            'Golang (Chi | GinGonic)',
            'Node',
            'Nest',
            'Python (FastAPI)'
            ]
        ),
        new StackClass(
            'TOOLS',
            [
            'Git',
            'Linux',
            'Docker'
            ],
        ),
        new StackClass(
            'MOMs',
            [
            'RabbitMQ', 
            'Kafka',
            ]
        )
    ]

    const stack = {
        'en': [
            'Stack',
            'Technologies that I have worked with',
            stackByType
        ],
        'es': [
            'Stack',
            'Tecnologías con las que he trabajado',
            stackByType
        ]
    }

    const projects = {
        'en': new ProjectSection(
            'Projects',
            'A selection of some of the projects which I have worked with',
            [
            new ProjectClass(
                'Money Laundering Analysis',
                'Distributed fault tolerant query system that resolves 5 queries for large datasets.',
                [
                    'Golang',
                    'RabbitMQ'
                ],
                moneyLandeuringLink,
            ),
            new ProjectClass(
                'Spotify Clone',
                'Mobile Spotify clone where I developed the infrastructure and the microservices using Golang with tools like Kafka and databases like MongoDB and PostgreSQL',
                [
                'Golang',
                'Kafka',
                'MongoDB',
                'PostgreSQL',
                'Terraform'
                ],
                melodiaLinks,
            ),
            new ProjectClass(
                'Counter-Strike 2D Remake',
                'Counter-Strike 2D remake built in C++ using Qt and SDL. I was responsible of developing the protocol so the clients and server can communicate between them, and also handling the multithreading that both systems support',
                [
                'C++',
                'SDL',
                'Qt'
                ],
                cs2dLink,
            )
            ]
        ),
        'es': new ProjectSection(
            'Proyectos',
            'Algunos de los proyectos en los que he trabajado',
            [
            new ProjectClass(
                'Money Laundering Analysis',
                'Sistema distribuido tolerante a fallos que resuelve 5 consultas para conjuntos de datos grandes.',
                [
                    'Golang',
                    'RabbitMQ'
                ],
                moneyLandeuringLink,
            ),
            new ProjectClass(
                'Spotify Clone',
                'Clon móvil de Spotify donde desarrollé la infraestructura y los microservicios usando Golang con herramientas como Kafka y bases de datos como MongoDB y PostgreSQL',
                [
                'Golang',
                'Kafka',
                'MongoDB',
                'PostgreSQL',
                'Terraform'
                ],
                melodiaLinks,
            ),
            new ProjectClass(
                'Counter-Strike 2D Remake',
                'Remake de Counter-Strike 2D desarrollado en C++ usando Qt y SDL. Fui responsable de desarrollar el protocolo para que los clientes y el servidor se comuniquen entre sí, y también del manejo del multithreading que soportan ambos sistemas',
                [
                'C++',
                'SDL',
                'Qt'
                ],
                cs2dLink,
            )
            ]
        ),
    }

    const roadMapItems = [
        new RoadMapItemClass(
            aboutId,
            subsections[lang][0].title,
        ),
        new RoadMapItemClass(
            experienceId,
            experience[lang].title,
        ),
        new RoadMapItemClass(
            stackId,
            stack[lang][0],
        ),
        new RoadMapItemClass(
            projectsId,
            projects[lang].title,
        ),
        new RoadMapItemClass(
            contactId,
            subsections[lang][1].title,
        ),
    ]

    return (
        <div className="body-container">
            <div className="body-subcontainer">
                <section>
                    <Toggle selectedOption={lang} setOption={setLang} />
                    <h2>
                        Taiel Molina
                    </h2>
                    <h3>
                        {lang === 'es' ? 'Ingeniero de Software' : 'Software Engineer'}
                    </h3>
                    <p>
                        {firstSection[lang][0]}
                    </p>
                    <div className='map-container'>
                        <MapPin className='map' />
                        <span>{firstSection[lang][1]}</span>
                    </div>
                    <div className='available-container'>
                        {firstSection[lang][2]}
                    </div>
                    <div className='roadmap-container'>
                        {roadMapItems.map((value, index) => (
                            <RoadMapItem
                                key={index}
                                id={value.id}
                                title={value.title}    
                            />
                        ))}
                    </div>
                    <button 
                        className='download-container'
                    >
                        <a href={lang == 'es' ? cvEs : cvEn} target="_blank">
                            <Download className='download' />
                            {firstSection[lang][3]}
                        </a>
                    </button>
                    <div className='socialmedia-container'>
                        <a
                            href={githubURL}
                            target="_blank"
                            aria-label="GitHub"
                        >
                            <GithubIcon color='#545454' className='icon'/>
                        </a>
                        <a
                            href={linkedinURL}
                            target="_blank"
                            aria-label="Linkedin"
                        >
                         <LinkedinIcon color='#545454' className='icon'/>
                        </a>
                    </div>
                </section>
                <section>
                    <Subsection
                        id={aboutId}
                        title={subsections[lang][0].title} 
                        paragraph={subsections[lang][0].paragraph}
                    />
                    <Experience
                        id={experienceId}
                        title={experience[lang].title}
                        experience={experience[lang].experienceItems}
                    />
                    <Stack 
                        id={stackId}
                        title={stack[lang][0]} 
                        subtitle={stack[lang][1]} 
                        stack={stack[lang][2]}
                    />
                    <Projects
                        id={projectsId}
                        title={projects[lang].title} 
                        subtitle={projects[lang].subtitle} 
                        projects={projects[lang].projects}
                    />
                    <Contact
                        id={contactId}
                        title={subsections[lang][1].title} 
                        paragraph={subsections[lang][1].paragraph}
                    />
                </section>
            </div>
        </div>
    )
}

export default Body;