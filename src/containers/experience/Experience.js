import SideRibbon from '../../components/ribbon/Ribbon'
import ProgressBar from '../../components/progress/Progress'
import { SiIbm } from 'react-icons/si'
import { FaGraduationCap } from 'react-icons/fa'
import { AiFillFilePdf, AiOutlineGithub } from 'react-icons/ai'
import Resume from '../../assets/Resume.pdf'
import './Experience.css'

const WorkExperience = () => {
    return (
        <div className='experience-container'>
            <SideRibbon text='Professional' />
            <div className='work-container'>
                <div className='title-container'>
                    <SiIbm size={75} />
                    <div className='work-title'>IBM / Front-End Developer</div>
                    <div className='material-container'>
                        <a href={Resume} target='_blank' rel='noreferrer'>
                            <AiFillFilePdf size={40} />
                        </a>
                    </div>
                </div>
                <div className='work-dates'>June 2021 - May 2023</div>
                <div className='work-summary-container'>
                    <div className='work-summary'>
                        <div style={{ marginBottom: '1rem' }}>
                            My time at IBM afforded me the opportunity to work on diverse teams in an agile environment to develop
                            complex applications and user-centric UIs.
                        </div>
                        I gained valuable skills working alongside designers and product managers creating reusable components,
                        new applications, and thorough tests.
                    </div>
                </div>
                <div className='tech-stack-container'>
                    <div className='tech-stack-summary'>
                        <div className='skill-container'>
                            <div className='skill-title'>HTML /</div>
                            <div>Clean and accessible webpage structures</div>
                            <ProgressBar years={2} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>CSS /</div>
                            <div>Styling components with CSS and Sass</div>
                            <ProgressBar years={2} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>JavaScript /</div>
                            <div>Developing complex and dyanamic UI features</div>
                            <ProgressBar years={2} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>React /</div>
                            <div>Creating applications under the framework using libraries such as React Router and Redux</div>
                            <ProgressBar years={2} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>NodeJS /</div>
                            <div>Server-side implementation using libraries like Express and Axios</div>
                            <ProgressBar years={2} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>Travis CI /</div>
                            <div>Creating and integrating automated tests and package update scripts</div>
                            <ProgressBar years={2} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>Redux /</div>
                            <div>Managing stateful components in complex UIs</div>
                            <ProgressBar years={1} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>Jest /</div>
                            <div>Thorough unit testing with maxiumum code coverage</div>
                            <ProgressBar years={1} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>TypeScript /</div>
                            <div>Developing dyanamic UI elements</div>
                            <ProgressBar years={0.5} />
                        </div>
                    </div>
                </div>
            </div>
            <SideRibbon text='Academic' />
            <div className='work-container'>
                <div className='title-container'>
                    <FaGraduationCap size={75} />
                    <div className='work-title'>University of Arizona</div>
                    <div className='material-container'>
                        <a href='https://github.com/lvarnum' target='_blank' rel='noreferrer'>
                            <AiOutlineGithub size={40} />
                        </a>
                    </div>
                </div>
                <div className='work-dates'>BA Computer Science / May 2021</div>
                <div className='work-summary-container'>
                    <div className='work-summary'>
                        <div style={{ marginBottom: '1rem' }}>
                            My degree program taught me the basic Computer Science principles, data structures,
                            and algorithms.
                        </div>
                        My Communication Minor taught me effective communication strategies both in and out of the
                        workplace.
                    </div>
                </div>
                <div className='tech-stack-container'>
                    <div className='tech-stack-summary'>
                        <div className='skill-container'>
                            <div className='skill-title'>HTML /</div>
                            <ProgressBar years={0.5} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>CSS /</div>
                            <ProgressBar years={0.5} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>JavaScript /</div>
                            <ProgressBar years={0.5} />
                        </div>
                    </div>
                </div>
                <div className='work-dates' style={{ marginTop: '1rem' }}>Full-stack Development Bootcamp / July 2020</div>
                <div className='work-summary-container'>
                    <div className='work-summary'>
                        <div>
                            The Full-stack Web Development Bootcamp gave me hands-on experience with developing
                            web applications in a variety of technologies.
                        </div>
                    </div>
                </div>
                <div className='tech-stack-container'>
                    <div className='tech-stack-summary'>
                        <div className='skill-container'>
                            <div className='skill-title'>HTML /</div>
                            <ProgressBar years={0.5} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>CSS /</div>
                            <ProgressBar years={0.5} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>JavaScript /</div>
                            <ProgressBar years={0.5} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>React /</div>
                            <ProgressBar years={0.5} />
                        </div>
                        <div className='skill-container'>
                            <div className='skill-title'>NodeJS /</div>
                            <ProgressBar years={0.5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience