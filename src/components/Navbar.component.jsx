import React from 'react'

import {logout} from './UserFunctions'

const Navbar = () =>{
    return (
        <div>
            <span onClick={() => logout()}>Logout</span>
        </div>
        // <nav className="navbar navbar-inverse " role="navigation">
        //     <div className="container">
        //         {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        //         <div className="navbar-header">
        //             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
        //                 <span className="sr-only">Toggle navigation</span>
        //                 <span className="icon-bar"></span>
        //                 <span className="icon-bar"></span>
        //                 <span className="icon-bar"></span>
        //             </button>          
        //         </div>
        //         <a className="navbar-brand" href="/">Brand</a>
        //         {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        //         <div className="collapse navbar-collapse" id="navbar-collapse-1">
        //             <ul className="nav navbar-nav navbar-left">
        //                 <li><a href="/">Menu</a></li>
        //                 <li><a href="/">Menu</a></li>
        //             </ul>
        //             <ul className="nav navbar-nav navbar-right">
        //                 <li><a href="/">Link</a></li>
        //                 <li><a href="/">Link</a></li>
        //                 <li><a href="/">Link</a></li>
        //                 <li className="dropdown">
        //                     <a href="/" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
        //                     <ul className="dropdown-menu">
        //                         <li><a href="/">Action</a></li>
        //                         <li><a href="/">Another action</a></li>
        //                         <li><a href="/">Something else here</a></li>
        //                         <li className="divider"></li>
        //                         <li><a href="/">Separated link</a></li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //         </div>
        //         {/* <!-- /.navbar-collapse --> */}
        //     </div>
        //     {/* <!-- /.navbar-container --> */}
        // </nav>
    )
}

export default Navbar