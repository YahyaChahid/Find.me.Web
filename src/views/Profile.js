import React, { useState,useEffect } from 'react';
import '../assets/style/zinebStyle.css'
import {Helmet} from 'react-helmet';
import img from '../assets/images/img.jpg'
import {Link} from "react-router-dom";
import Axios from 'axios';


const Profile = () => {
    const [profile,setProfile] = useState({});
    const [qrcode,setQrCode] = useState("");

    async function getMyInfo(){
        try{
            const myinfo = await Axios.get('http://localhost:3001/myprofile',{headers: {"auth" : localStorage.auth} });
            setProfile(myinfo.data)
            console.log(myinfo.data)
        } catch(err){
            console.log(err);
        }
    }
    async function getQRCode() {
        try{
            const qrcode = await Axios.get('http://localhost:3001/qrcode/'+ profile._id);
            setQrCode(qrcode)
        }catch(err){
            console.log(err);
        }
    }
      useEffect(() => {
        getMyInfo();
      }, []);
    return (
        <>
            <Helmet>
                <style>{'body { background-color: #262936; }'}</style>
            </Helmet>
        <section style={{backgroundColor: '#262936'}}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4"  style={{ backgroundColor: '#292c3a' }}>
                            <div className="card-body text-center">
                                <div className="d-flex justify-content-center">
                                    <img src={profile.profileImg} alt="avatar" className="rounded-circle img-fluid" style={{width: '150px'}} />
                                </div>
                                <h5 className="my-3">{profile.fullname}</h5>
                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Targa, Marrakech, Morocco</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <Link to="/localisation">
                                        <button type="button" className="btn btn-dark">Get Address</button>
                                    </Link>
                                    <button type="button" className="btn btn-outline-primary ms-1" onClick={getQRCode}>QR Code</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card mb-4 mb-lg-0"  style={{ backgroundColor: '#292c3a' }}>
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3"  style={{ backgroundColor: '#292c3a' }}>
                                        <i className="fas fa-globe fa-lg text-warning" />
                                        <p className="mb-0 text-light">https://infos.com</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3"  style={{ backgroundColor: '#292c3a' }}>
                                        <i className="fab fa-github fa-lg" style={{color: '#333333'}} />
                                        <p className="mb-0 text-light">https://git.lmariouh.com/</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3"  style={{ backgroundColor: '#292c3a' }}>
                                        <i className="fab fa-twitter fa-lg" style={{color: '#55acee'}} />
                                        <p className="mb-0 text-light">@lmazineb</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3"  style={{ backgroundColor: '#292c3a' }}>
                                        <i className="fab fa-instagram fa-lg" style={{color: '#ac2bac'}} />
                                        <p className="mb-0 text-light">Zineb Lmariouh</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3"  style={{ backgroundColor: '#292c3a' }}>
                                        <i className="fab fa-facebook-f fa-lg" style={{color: '#3b5998'}} />
                                        <p className="mb-0 text-light">Zineb Lmariouh</p>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4"  style={{ backgroundColor: '#292c3a' }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profile.fullname}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profile.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">+212 {profile.phone}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Mobile</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">+212 {profile.phone}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Address</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profile.address}, {profile.city}, {profile.country}</p>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                        {qrcode != "" && (
                            <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-5 mb-md-0"  style={{ backgroundColor: '#292c3a' }}>
                                    <img src={qrcode.data} alt="avatar"/>
                                    <div className="card-body">
                                        {/* <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                        </p>
                                        <p className="mb-1" style={{fontSize: '.77rem'}}>Web Design</p>
                                        <div className="progress rounded" style={{height: '5px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Website Markup</p>
                                        <div className="progress rounded" style={{height: '5px'}}>
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '24%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>One Page</p>
                                        <div className="progress rounded" style={{height: '5px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Mobile Template</p>
                                        <div className="progress rounded" style={{height: '5px'}}>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '45%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Backend API</p>
                                        <div className="progress rounded mb-2" style={{height: '5px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="card mb-4 mb-md-0"  style={{ backgroundColor: '#292c3a' }}>
                                    <div className="card-body">
                                        <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                        </p>
                                        <p className="mb-1" style={{fontSize: '.77rem'}}>Web Design</p>
                                        <div className="progress rounded" style={{height: '5px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Website Markup</p>
                                        <div className="progress rounded" style={{height: '5px'}}>
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '24%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>One Page</p>
                                        <div className="progress rounded" style={{height: '5px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Mobile Template</p>
                                        <div className="progress rounded" style={{height: '5px'}}>
                                            <div className="progress-bar  bg-warning" role="progressbar" style={{width: '45%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Backend API</p>
                                        <div className="progress rounded mb-2" style={{height: '5px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Profile;
