
import React from 'react'
import './styles/header.css'
import './styles/responsive.css'
import { Link } from 'react-router-dom'

const { handleSideNavToggle } = require('./components/headercomponents')
const Header = () => {
    return (
        <header>
            <section id='header'>
                <div className='headerToggle' data-command='open' onClick={handleSideNavToggle}>
                    <div data-command='open'></div>
                    <div data-command='open'></div>
                    <div data-command='open'></div>
                </div>
                <div className='header__middle'>
                    <h1 className='header__header'>Sir Davidson Foundation</h1>
                    <p className='motto'><i>Giving Back Through Life Experiences</i></p>
                </div>
                <div></div>
            </section>

            <section id='sideHeader'>
                <span className='close' data-command='close' onClick={handleSideNavToggle}>
                    &times;
                    </span>
                <section className="sideHeaderLinksSection">
                    <div className='sideHeaderLinkDiv'>
                        <Link to='/about/'>About</Link>
                    </div>
                    <div className='sideHeaderLinkDiv'>
                        <Link to='/contact/'>Contact</Link>
                    </div>
                    <div className='sideHeaderLinkDiv'>
                        <Link to='/donate/'>Donate</Link>
                    </div>
                    <div className='sideHeaderLinkDiv'>
                        <Link to='/projects/'>Projects</Link>
                    </div>
                    <div className='sideHeaderLinkDiv'>
                        <Link to='/gallery/'>Gallery</Link>
                    </div>
                    <div className='sideHeaderLinkDiv'>
                        <Link to='/sponsors/'>Sponsors</Link>
                    </div>
                </section>
            </section>
        </header>
    )
}

export default Header