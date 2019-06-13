import React from 'react';
import Footer from './Footer';
import resume from './assets/JuneSuparoekResume.pdf';

const Home = () => {
    return(
        <div className="page">
            <section>
                <div className="home">
                <h1>Hi, my name is <span className="highlight">June Suparoek</span>. I build things for people.</h1>
                <p>I'm a full-stack software developer who enjoys working at the
                intersection of engineering and design. I'm currently working at <span className="highlight"><a href="https://www.rewardsnetwork.com/" target="_blank" rel="noopener noreferrer">Rewards Network</a></span></p>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="button-link">Resume</a>
                </div>
            </section>
            <Footer />
        </div>   
    )
}

export default Home;