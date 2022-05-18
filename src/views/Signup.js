import React, { useRef, useState }  from 'react';
import '../assets/style/zinebStyle.css'
import {Helmet} from 'react-helmet';
import Axios from 'axios';
import { useHistory  } from "react-router-dom"

const Signup = () => {

    const fullnameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const phoneRef = useRef()
    const countryRef = useRef()
    const cityRef = useRef()
    const addressRef = useRef()
    const history = useHistory()

    async function handleSignup(e) {
        e.preventDefault()
        try{
            await Axios.post('http://localhost:3001/register',
            {   fullname: fullnameRef.current.value,
                email:emailRef.current.value,
                password:passwordRef.current.value,
                phone:phoneRef.current.value,
                country:countryRef.current.value,
                city:cityRef.current.value,
                address:addressRef.current.value
            });
            history.push("/login")
            
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
                        <h1>Sign up</h1>
                    </header>
                    <section>
                        <form onSubmit={handleSignup} className="login-form">
                            <div className="input-group">
                                <label htmlFor="firstName">Full name</label>
                                <input type="text" placeholder="Enter Full name" ref={fullnameRef} id="firstName" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="username">Email</label>
                                <input type="email" placeholder="Enter Email" ref={emailRef} id="username" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Enter Password" ref={passwordRef} id="password" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="firstName">Phone Number</label>
                                <input type="text" placeholder="Enter Phone Number" ref={phoneRef} id="firstName" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="firstName">Country</label>
                                <input type="text" placeholder="Enter Country" ref={countryRef} id="firstName" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="firstName">City</label>
                                <input type="text" placeholder="Enter City" ref={cityRef} id="firstName" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="firstName">Adresse</label>
                                <input type="text" placeholder="Enter Adresse" ref={addressRef} id="firstName" />
                            </div>
                            <div className="input-group">
                                <button type="submit">Sign up</button>
                            </div>
                        </form>
                    </section>
                    <footer>
                        <a href={`/login`}  title="Login">Already have an account? Login Instead</a>
                    </footer>
                </div>
            </section>


        </>
    );
}

export default Signup;