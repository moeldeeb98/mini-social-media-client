import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from './UserFunctions'

const Navbar = () =>{
    return (
    <header>
        <div className="row">
            <div className="col-md-3 text-left">
                <Link to="/" className="logo">Logo</Link>
            </div>
            <div className="col-md-9 text-center">
                <nav>
                    <ul className="nav__links">
                        <div className="row">
                            <div className="col-md-8 text-left">
                                <li>
                                    <a className='nav-link' href='/homepage'>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className='nav-link' href='/timeline'>
                                        {localStorage.getItem('first_name')}
                                    </a>
                                </li>
                            </div>
                            <div className="col-md-4 text-right">
                                <li>
                                    <a onClick={() => logout()} className='nav-link' href='/'>
                                        logOut
                                    </a>
                                </li>
                            </div>
                        </div>


                    </ul>
                </nav>          
            </div>
            <div className="col-md-3 text-right"></div>
        </div>
      
    </header>
    )
}

export default Navbar