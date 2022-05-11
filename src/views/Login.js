import React from 'react';
import '../assets/style/zinebStyle.css'
import {Helmet} from 'react-helmet';

const Login = () => {

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
                        <form action="" className="login-form">
                            <div className="input-group">
                                <label htmlFor="username">Username or Email</label>
                                <input type="text" placeholder="Username or Email" id="username" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Password" id="password" />
                            </div>
                            <div className="input-group">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </section>
                    <footer>
                        <a href="#" title="Forgot Password">Forgot Password</a>
                    </footer>
                </div>
            </section>


        </>
    );
}

export default Login;