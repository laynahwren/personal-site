import SideRibbon from '../../components/ribbon/Ribbon'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import Lexeme from '../../assets/lexeme.png'
import './Project.css'

const CurrentProject = () => {
    return (
        <div className='project-container'>
            <SideRibbon text='Lexeme | WIP' />
            <div className='project-info-container'>
                <div id='imgContainer' className='lexeme-container'>
                    <img id='lexemePic' src={Lexeme} alt='Lexeme Screenshot' />
                </div>
                <div id='detailsContainer' className='lexeme-container'>
                    <div className='lexeme-links'>
                        <a href='https://github.com/laynahwren/lexeme' target='_blank' rel='noreferrer'>
                            <AiOutlineGithub size={50} />
                        </a>
                        <div>|</div>
                        <a href='https://lexeme.herokuapp.com/' target='_blank' rel='noreferrer'>
                            <RiComputerLine size={50} />
                        </a>
                    </div>
                    <div className='lexeme-stack-title'>Current Stack</div>
                    <ul className='lexeme-stack-list'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>Axios</li>
                        <li>Express</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CurrentProject