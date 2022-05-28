import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';

function Auth(props) {
    return (
        <div>
            <Header/>
            <section className='auth-container'>
            <Routes>
             <Route path="/login" element={<Login/>}/>
             <Route path="/signup" element={<SignUp/>}/>
            </Routes>
            </section>
        </div>
    );
}

export default Auth;