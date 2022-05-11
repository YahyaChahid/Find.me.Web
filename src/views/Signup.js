import React from 'react';
import '../assets/style/zinebStyle.css'
import {Helmet} from 'react-helmet';

const Signup = () => {

    return (
        <>
            <Helmet>
                <style>{'body { background-color: #262936; }'}</style>
            </Helmet>
            <section className="wrapper">
                <div className="content mt-5 py-5">
                    <header>
                        <h1>Sign up</h1>
                    </header>
                    <section>
                        <form action="" className="login-form">
                            <div className="input-group">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" placeholder="First name" id="firstName" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" placeholder="Last name" id="lastName" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="username">Username or Email</label>
                                <input type="text" placeholder="Username or Email" id="username" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Password" id="password" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="re-password">Retype password</label>
                                <input type="password" placeholder="Retype password" id="re-password" />
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

export default Signup;