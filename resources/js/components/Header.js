import React from 'react'
import { Link } from 'react-router-dom'
 
const Header = () => (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
        </div>
            <Link className='navbar-brand' to='/'>CRUD Article</Link>
    </nav>
)
 
export default Header