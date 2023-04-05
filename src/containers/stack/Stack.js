import ProgressBar from '../../components/progress/Progress'
import SideRibbon from '../../components/ribbon/Ribbon'
import './Stack.css'

const TechStack = () => {
    return (
        <div className='stack-container'>
            <SideRibbon text='Main Skills' />
            <div className='skills-container'>
                <div className='skill-container'>
                    <div className='skill-title'>HTML /</div>
                    <ProgressBar years={3} />
                </div>
                <div className='skill-container'>
                    <div className='skill-title'>CSS /</div>
                    <ProgressBar years={3} />
                </div>
                <div className='skill-container'>
                    <div className='skill-title'>JavaScript /</div>
                    <ProgressBar years={3} />
                </div>
                <div className='skill-container'>
                    <div className='skill-title'>React /</div>
                    <ProgressBar years={3} />
                </div>
                <div className='skill-container'>
                    <div className='skill-title'>NodeJS /</div>
                    <ProgressBar years={3} />
                </div>
            </div>
            <SideRibbon text='Other Skills' />
            <div className='skills-container'>
                <div className='skill-container'>
                    <div className='skill-title'>Travis CI /</div>
                    <ProgressBar years={2} />
                </div>
                <div className='skill-container'>
                    <div className='skill-title'>Redux /</div>
                    <ProgressBar years={1} />
                </div>
                <div className='skill-container'>
                    <div className='skill-title'>Jest /</div>
                    <ProgressBar years={1} />
                </div>
                <div className='skill-container'>
                    <div className='skill-title'>TypeScript /</div>
                    <ProgressBar years={0.5} />
                </div>
            </div>
        </div>
    )
}

export default TechStack