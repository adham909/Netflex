import React from 'react'
import './Login.css'
import logo from '../../constans/Images'
import { Link } from "react-router-dom";


function Login() {
 
  return (
    
    <section className="login">
        <div className="header d-flex justify-content-between align-items-center">
            <img src={logo.logo} alt="logo" className='z-index-1'/>
        </div>

        <div className="content d-flex justify-content-center align-items-center">

            <div className='d-flex d-column align-items-center'>
              <h1 className='z-index-1 h1'>Unlimited movies, TV shows, and more.</h1>
              <h2 className='z-index-1'>Watch anywhere. Cancel anytime.</h2> 
              <Link to="/home" className="btn btn-primary z-index-1 membership">Get Started</Link>
            </div>
           
          </div>
        
    </section>
  )
}

export default Login