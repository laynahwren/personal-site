import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import ProfilePic from '../../assets/me.jpg'
import './Home.css'

const HomePage = () => {
    return (
        <div className="home-container">
            <div id='hello-ribbon' className='intro-ribbon'>Hello</div>
            <div id='name-ribbon' className='intro-ribbon'>My name is Laynah Varnum</div>
            <div className='summary-container'>
                <div className='summary'>
                    <div className='title'>I am a <div className='job-title'>&nbsp;Front-end Developer</div></div>
                    <div className='text'>
                        I love creating clean, beautiful UI experiences that put the user first.
                    </div>
                    <div className='picture-container'>
                        <a className='link-icon' href='https://github.com/laynahwren' target="_blank" rel='noreferrer'>
                            <AiOutlineGithub size={75} />
                        </a>
                        <img className='profile-pic' src={ProfilePic} alt='me'></img>
                        <a className='link-icon' href='https://www.linkedin.com/in/laynah-varnum-6a6ba3178/' target="_blank" rel='noreferrer'>
                            <AiFillLinkedin size={75} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage