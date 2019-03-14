import React from 'react';
import Footer from './Footer';

const Home = () => {
    return(
        <div className="page">
            <section>
                <div className="home">
                <h1>Hi, my name is <span className="highlight">June Suparoek</span>. I build things for people.</h1>
                <p>I'm a full-stack software developer who enjoys working at the
                intersection of engineering and design. I'm currently looking for a job as a <span className="highlight">front end developer</span></p>
                <a href="/public/JuneSuparoekResume.pdf" target="_blank" className="button-link">Resume</a>
                </div>
            </section>
            <Footer />
        </div>   
    )
}

export default Home;