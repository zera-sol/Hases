import React from 'react';
import "./LoginPage.css"
import { Link } from 'react-router-dom';
export default function LoginPage() {
    return(
        <div className='loginpage'>
          <form>
            <h2>Login</h2>
            <label> Username or Email </label>
            <input type="text" 
                   name="email" />
            
            <label> Password </label>
            <input type="password" 
                   name="password" />
            <button type="submit">Login</button>
            <Link to="/register" className='link-registerPage'>Don't have an account?</Link>
          </form>
        </div>
    )
}