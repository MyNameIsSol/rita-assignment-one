import React from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'


const Login = () => {
    return(
        <div className="container">
            <div className="header">
                <div className="text">Log In</div>
                <div className='underline'></div>
            </div>

            <div className="inputs">
                <div className='input'> 
                    <span className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span> 
                     <input type="email" placeholder="Email" />  
                </div>
                <div className='input'> 
                    <span className="icon">
                        <FontAwesomeIcon icon={faLock} />
                    </span> 
                     <input type="password" placeholder='Password' />  
                </div>
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                <div className="submit-container">
                    <div className="submit">Login</div>
                </div>
            </div>

        </div>
    )
}

export default Login