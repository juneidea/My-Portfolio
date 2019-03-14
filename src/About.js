import React from 'react';
import Footer from './Footer';
import portrait from './assets/June2.png';

const About = () => {
    return(
        <div className="page">
            <section>
                <div className="about">
                <h1 className="coverBold">About Me</h1>
                <h5>I'm a software developer with a background in front end web design.</h5>
                <p>My first job after college was a marketing in real estate company, where I was fortunate to have supportive bosses who let me join the digital team as a web designer. That experience got me hooked on <span className="highlight">HTML CSS JavaScript</span>, so I decided to change careers.</p>
                <p>I attended <span className="highlight"><a href="https://www.fullstackacademy.com/">Fullstack Academy</a></span> in Chicago to better learn full-stack development.</p>
                <p>When I'm not messing around with new front end library and feature, I like to read books, listen to podcasts, play saxophone, and watch Youtube.</p>
                </div>
                <img src={portrait} className="portrait" alt="portrait" />
            </section>
            <Footer />
        </div>
    )
}

export default About;