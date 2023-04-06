import SideRibbon from '../../components/ribbon/Ribbon'
import { SiIbm } from 'react-icons/si'
import { FaGraduationCap } from 'react-icons/fa'
import { AiFillFilePdf } from 'react-icons/ai'
import Resume from '../../assets/Resume.pdf'
import './Experience.css'

const WorkExperience = () => {
    return (
        <div className='experience-container'>
            <SideRibbon text='Professional' />
            <div className='work-container'>
                <div className='title-container'>
                    <SiIbm size={75} />
                    <div className='work-title'>IBM / Front-end Developer</div>
                </div>
                <div className='work-dates'>June 2021 - Present</div>
                <div className='work-summary-container'>
                    <div className='work-summary'>
                        <div style={{ marginBottom: '1rem' }}>
                            My time at IBM has afforded me the opportunity to work on diverse teams in an agile environment to develop
                            complex applications and user-centric UIs.
                        </div>
                        I have gained valuable skills working alongside designers and product managers to create reusable components,
                        new applications, and thorough tests.
                    </div>
                    <div className='resume-container'>
                        <a href={Resume} target='_blank' rel='noreferrer'>
                            <AiFillFilePdf size={75} />
                        </a>
                    </div>
                </div>
            </div>
            <SideRibbon text='Academic' />
            <div className='work-container'>
                <div className='title-container'>
                    <FaGraduationCap size={75} />
                    <div className='work-title'>University of Arizona</div>
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
                <div className='work-dates' style={{marginTop: '1rem'}}>Full-stack Development Bootcamp / July 2020</div>
                <div className='work-summary-container'>
                    <div className='work-summary'>
                        <div style={{ marginBottom: '1rem' }}>
                            The Full-stack Web Development Bootcamp gave me hands-on experience with developing
                            web applications in a variety of technologies.
                        </div>
                        <div className='code-link'>
                            <a href='https://github.com/lvarnum' target='_blank' rel='noreferrer'>Project Codebases</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience