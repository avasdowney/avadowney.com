import React from 'react';

import "../../css/styles.css";

import pic from '../../images/ava_bitmoji.png';
import GitHub from '../../images/GitHub-Mark-Light-64px.png';
import LinkedIn from '../../images/LI-In-Bug.png';
import Email from '../../images/mail.png';
import DownArrow from '../../images/circle-arrow-down.png';

const aboutContainer = {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: '2vh',
};
const nameStyle = {
    fontSize: '4rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '.5rem',
    letterSpacing: '2px',
};
const subtitleStyle = {
    fontSize: '1.5rem',
    color: '#e0e0e0',
    marginBottom: '2.5rem',
    fontWeight: 400,
};
const iconRow = {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    marginBottom: '2.5rem',
};
const iconStyle = {
    height: '2.5rem',
};

const scrollBtnStyle = {
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#202020b3',
    border: 'none',
    borderRadius: '50%',
    width: '3.5rem',
    height: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 8px #00000026',
    transition: 'background 0.2s',
    zIndex: 1000,
};

const arrowStyle = {
    color: '#fff',
};

const bioSectionStyle = {
    minHeight: '100vh',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 0,
    borderRadius: 0,
    boxShadow: 'none',
    width: '100vw',
    maxWidth: '100vw',
    padding: 0,
    position: 'relative',
    top: 0,
    left: 0,
    zIndex: 2,
};

const About = () => {
    const bioRef = React.useRef(null);
    const aboutContainerRef = React.useRef(null);
    const [showArrow, setShowArrow] = React.useState(true);
    const [pointingUp, setPointingUp] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (aboutContainerRef.current && bioRef.current) {
                const aboutRect = aboutContainerRef.current.getBoundingClientRect();
                const bioRect = bioRef.current.getBoundingClientRect();
                
                // Show arrow if we're on either section
                setShowArrow(aboutRect.bottom > 0 || bioRect.top < window.innerHeight);
                
                // Point up if bio section is in view, down if about section is in view
                setPointingUp(bioRect.top < window.innerHeight * 0.5);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleArrowClick = () => {
        if (pointingUp && aboutContainerRef.current) {
            aboutContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (!pointingUp && bioRef.current) {
            bioRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div ref={aboutContainerRef} style={aboutContainer}>
                <img src={pic} alt="Ava Bitmoji" style={{
                    height: '30vh',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '3rem',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.18)'
                }} />
                <h1 class="rotateColor" style={{
                    ...nameStyle,
                    marginTop: '0.2rem',
                }}>Ava Downey</h1>
                <div style={subtitleStyle}>Data Engineer&nbsp;|&nbsp;Generative AI</div>
                <div style={iconRow}>
                    <a href="https://github.com/avasdowney" target="_blank" rel="noreferrer">
                        <img src={GitHub} alt="GitHub" style={iconStyle} />
                    </a>
                    <a href="https://www.linkedin.com/in/ava-downey-9b59931aa/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" style={iconStyle} />
                    </a>
                    <a href="mailto:avasdowney@gmail.com">
                        <img src={Email} alt="Email" style={iconStyle} />
                    </a>
                </div>
                {showArrow && (
                    <button style={scrollBtnStyle} onClick={handleArrowClick} aria-label="Scroll for more">
                        <img src={DownArrow} alt={pointingUp ? "▲" : "▼"} style={{...arrowStyle, transform: pointingUp ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                    </button>
                )}
            </div>
            <section ref={bioRef} style={bioSectionStyle}>
                <div style={{ maxWidth: '600px', margin: '0 auto', color: '#e0e0e0', fontSize: '1.2rem', lineHeight: 1.7, padding: '2rem' }}>
                    <p>
                        As a Data Engineer at Travelers Insurance, I have built several innovative Generative AI solutions from end to end, including Travelers'
                        first and only external Gen AI application. My dedication to innovation recently earned me first place in a company-wide competition for
                        an agentic reasoning model where I was able to work with cross-functional teams to improve our business processes. I've also been a
                        champion for internal Gen AI adoption, leading workshops to introduce tools such as GitHub Copilot to my line of business while minimizing
                        tech debt. My professional passion is Generative AI, while my downtime is dedicated to hitting the hiking trails, diving into a video game
                        with friends, or drawing. 
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;