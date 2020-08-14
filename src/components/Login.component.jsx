import React from 'react'
import socialNetowrkImage from './../images/img-01.png'

import {login} from './UserFunctions'

const Login = () =>{
    return(
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={socialNetowrkImage} alt="Social Network"/>
                    </div>

                    <div>
                        
                        <form className="login100-form validate-form"
                            onSubmit={handelSubmit}>
                            <span className="login100-form-title">
                                Member Login
                            </span>

                            <div className="wrap-input100 validate-input" 
                                data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" 
                                    type="text" 
                                    name="email"
                                    placeholder="Email"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" 
                                data-validate="Password is required">
                                <input className="input100" 
                                    type="password" 
                                    name="password"
                                    placeholder="Password"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="submit">
                                    Login
                                </button>
                            </div>
                            
                        </form>

                        <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot{" "}
                            </span>
                            <span className="txt2">
                                Password?
                            </span>
                        </div>
                        <div className="text-center p-t-136">
                            <a className="txt2" href='/register'>
                                Create your Account
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

const handelSubmit = (e) =>{
    e.preventDefault()
    let user = {
        email: e.target.elements[0].value,
        password: e.target.elements[1].value
    }
    login(user).then( res =>{
        if(res.data.data){
            console.log(res.data.data)
            window.location.href = '/homepage'
        }else{
            alert('error : ' + res.data.message)
        }
    })
}



export default Login