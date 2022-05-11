import React from 'react';
import '../assets/style/zinebStyle.css'
import {Helmet} from 'react-helmet';
import img from '../assets/images/img.jpg'
import {Link} from "react-router-dom";


const Profile = () => {

    return (
        <div className="container mt-4">
            <div className=" row">
                <div className="col-md-4">
                    <br/><br/>
                    <img src={img}/>
                </div>
                <div className="col-md-8">
                    <h1 className="display-4">M.Asim Maqsood</h1>

                    <h3>Web Developer</h3>
                    <p>Work links</p>
                    <p className="lead">
                        <a href="http://">Linkdin</a>
                        <br />
                        <a href="http://">Github</a>
                        <br />
                        <a href="http://">FaceBook</a>
                    </p>
                </div>

                <hr className="my-4" />

                <p>User ID : 123456789</p>
                <p>Name : M.Asim Maqsood</p>
                <p>email : asimmaqsood57@gmail.com</p>
                <p>phone : 1234567889</p>
                <p>Profession : Web developer</p>

                    <div className="col-md-4">
                        <a className="btn btn-primary  " href="addinformation" role="button">
                            Add more informations
                        </a>
                    </div>


                    <div className="col-md-4">
                        <a className="btn btn-primary " href="localisation" role="button">
                            Get localisation
                        </a>
                    </div>
                </div>



        </div>
    );
}

export default Profile;
