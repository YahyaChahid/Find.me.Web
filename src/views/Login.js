import React, { useRef, useState }  from 'react';
import '../assets/style/zinebStyle.css'
import {Helmet} from 'react-helmet';
import Axios from 'axios';
import { useHistory  } from "react-router-dom"

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        try{
            const log = await Axios.post('http://localhost:3001/login',{   
                email:emailRef.current.value,
                password:passwordRef.current.value
            });
            localStorage.setItem('auth' , log.data);
            history.push("/")

        }catch(err){
            console.log(err);
        }

    }

    return (
        <>
            <Helmet>
                <style>{'body { background-color: #262936; }'}</style>
            </Helmet>
            <section className="wrapper">
                <div className="content mt-5 py-5">
                    <header>
                        <h1>Welcome back</h1>
                    </header>
                    <section>
                        <form onSubmit={handleLogin} className="login-form">
                            <div className="input-group">
                                <label htmlFor="username">Email</label>
                                <input type="email" placeholder="Email" ref={emailRef}  id="username" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Password" ref={passwordRef} id="password" />
                            </div>
                            <div className="input-group">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </section>
                    <footer>
                        <a href={`/signup`} title="Login">Don't have an Account? Sign up here</a>
                    </footer>
                </div>
            </section>


        </>
    );
}

export default Login;