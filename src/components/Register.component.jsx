import React from 'react'
import {register} from './UserFunctions'
import socialNetowrkImage from './../images/img-01.png'

const Register = () =>{


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
                                Register
                            </span>
                            
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" 
                                    type="text" 
                                    name="first_name"
                                    placeholder="First Name"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>


                            <div className="wrap-input100 validate-input" >
                                <input className="input100" 
                                    type="text" 
                                    name="last_name"
                                    placeholder="Last Name"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>

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
                            
                            <div className="wrap-input100 validate-input" 
                                data-validate="Password is required">
                                <input className="input100" 
                                    type="password" 
                                    name="password_confirmation"
                                    placeholder="Confirme Password"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            
                            
                            
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="submit">
                                    Register
                                </button>
                            </div>
                            
                        </form>

                        <div className="text-center p-t-136">
                            <a className="txt2" href="/login">
                                Have an Account ?
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
    let newUser = {
        first_name: e.target.elements[0].value,
        last_name: e.target.elements[1].value,
        email: e.target.elements[2].value,
        password: e.target.elements[3].value,
        password_confirmation: e.target.elements[4].value
    }
    register(newUser).then( (res) =>{
        if(res.data.data){
            window.location.href = '/login'
        }else{
            alert(`error : ${res.data.message}`)
        }

    })
}

export default Register