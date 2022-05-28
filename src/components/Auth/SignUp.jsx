import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function SignUp(props) {
    return (
      
            <section className='auth-card'>
                <h3 className='auth-card__header'>Sign Up</h3>
                <SignUpForm/>
            </section>
            
       
    );
}

export default SignUp;