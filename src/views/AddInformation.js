import React from 'react';
import '../assets/style/zinebStyle.css'
import {Helmet} from 'react-helmet';

const AddInformation = () => {
    return (
        <>
            <Helmet>
                <style>{'body { background-color: #262936; }'}</style>
            </Helmet>
            <section className="wrapper">
                <div className="content mt-5 py-5">
                    <header>
                        <h1>More information</h1>
                    </header>
                    <section>
                        <form action="" className="login-form">
                            <div className="input-group">
                                <label htmlFor="firstName">More information</label>
                                <input type="text" placeholder="More information" id="more_information" />
                            </div>

                            <div className="input-group">
                                <button type="submit">Save</button>
                            </div>
                        </form>
                    </section>

                </div>
            </section>

        </>
    );
}

export default AddInformation;
