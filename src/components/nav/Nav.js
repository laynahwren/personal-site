import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const NavBar = () => {
    const [active, setActive] = useState('home')

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link
                            className={active === 'home' ? 'nav-link active' : 'nav-link'}
                            to="/"
                            onClick={() => setActive('home')}>Home</Link>
                        <Link 
                        className={active === 'experience' ? 'nav-link active' : 'nav-link'} 
                        to="/experience"
                        onClick={() => setActive('experience')}>Experience</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar