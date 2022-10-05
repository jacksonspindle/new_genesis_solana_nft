import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
         <div className='header'>
                <h1>LOGO</h1>
                <nav className='nav'>
                    <Link className='nav-link' to='/'>Twitter</Link>
                    <Link className='nav-link' to='/'>Discord</Link>
                    <Link className='nav-link' to='/roadmap'>Roadmap</Link>
                </nav>
            </div>
    )
} 

export default Header