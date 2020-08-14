import React from 'react'

import './Profile.style.css'
import profile_image from './../images/profile.png'

/**
 * desgin the profile card of the user who are logged in
 */
const Profile = () =>{
    return(
          <div className="row">
            <div className="col-lg-12 col-sm-12 profile-card">

                    <div className="card hovercard">
                        <div className="cardheader">

                        </div>
                        <div className="avatar">
                            <img alt="" src={profile_image}/>
                        </div>

                        <div className="info">
                            <div className="title">
                              <a>{localStorage.getItem('first_name') + " " + localStorage.getItem('last_name')}</a>
                            </div>
                            <div>
                              <small>{localStorage.getItem('email')}</small>
                            </div>
                            <div className="desc">Full-stack web Developer</div>
                            <div className="desc">Curious developer</div>
                            <div className="desc">Tech geek</div>
                            
                        </div>
                    </div>

                </div>
          </div>

    )
}

export default Profile