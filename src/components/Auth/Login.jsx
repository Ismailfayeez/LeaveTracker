import React from 'react';
import LoginForm from './LoginForm';

function Login(props) {
    return (
      
            <section className='auth-card'>
                <h3 className='auth-card__header'>Login</h3>
                <LoginForm/>
            </section>
            
       
    );
}

export default Login;