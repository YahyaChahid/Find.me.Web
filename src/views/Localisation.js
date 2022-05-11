import React from 'react';
import '../assets/style/zinebStyle.css'
import {Helmet} from 'react-helmet';

const Localisation = () => {
    return (
        <>
            <Helmet>
                <style>{'body { background-color: #262936; }'}</style>
            </Helmet>
            <section className="wrapper">
                <div className="content mt-5 py-5">
                    <header>
                        <h1>Localisation</h1>
                    </header>
                </div>
            </section>

        </>
    );
}

export default Localisation;
