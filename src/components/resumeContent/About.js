import React, { useEffect } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky } from "react-scroll-motion";
// unused vars for animation: Move, StickyIn, ZoomIn

import "../../css/styles.css";

import headshot from '../../images/ava_face.png';

// CSS Styles
const imgStyle = {
    display: 'inline-flex',
    width: '25%',
    margin: '0 auto',
    marginRight: '5vw',
    float: 'left',
    borderRadius: '1px'
    
};

const mobileTxtStyle = {
    marginTop: '5vh',
    marginBottom: '0',
    textAlign: 'center',
};

const mobileImgStyle = {
    width: '50%',
    margin: '0 auto',
    display: 'flex'
};

// check mobile
var mobile = require('is-mobile');

// animations
const FadeUp = batch(FadeIn(), MoveIn(), Sticky());
const AnimateTitle = batch(Fade(0, 1), MoveOut());
const AnimateImg = batch(Fade(), MoveOut(-100, 0));

// typing animation with rotating text
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 11) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 750;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

// stuff that gets rendered out
const About = () => {
    useEffect(()=>{
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-phrase');
            var period = elements[i].getAttribute('data-wait');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    }, [])

    if (!mobile()) {
        return (
            <header>
                <div class = "content">
                    {<br></br>}{<br></br>}                     
                    <ScrollContainer>
                        <ScrollPage page={0}> 
                            <Animator animation={AnimateImg}>
                                <img src={headshot} alt="headshot" style={imgStyle}/>
                            </Animator>
                            <Animator animation={AnimateTitle}>
                                {<br></br>}
                                <h1 class="typewrite rotateColor" data-wait="2000"
                                    data-phrase='[ "Hi, I&#39;m Ava.", "I am a student.", "I am an aspiring software engineer." ]'>
                                    <span class="wrap"></span>
                                </h1>
                            </Animator>
                        </ScrollPage>
                        <ScrollPage page={1}>
                            <Animator animation={FadeUp}>
                                <h2 class="rotateColor"> About </h2>
                                <p>
                                    I am a Junior honors student majoring in Computer Science, and minoring in both Mathematics and 
                                    Data Science at the University of Hartford. I have been coding since I was little, starting off 
                                    in Scratch, then moving onto Python and Java. I now have experience in many more languages such 
                                    as Clojure, and JavaScript, as well as many tools and frameworks including Git, Azure DevOps, 
                                    JupyterNotebook, JUnit, TravisCI and more. I am currently working on several projects both for 
                                    myself, and collaborative projects with my clubs including updating this website, and building 
                                    Discord bots, just to name a few! I am always looking for new projects to throw myself into to 
                                    learn something new, whether it be new coding projects, learning cool things about space, or 
                                    drawing.
                                </p>
                            </Animator>
                        </ScrollPage>
                    </ScrollContainer>
                </div>
            </header>
        )
    // for mobile version of website
    } else {
        return (
            <header>
                <div class = "content">
                    {<br></br>}
                    <img src={headshot} alt="headshot" class="fade-in" style={mobileImgStyle}/>
                    <h1 class="rotateColor" style={mobileTxtStyle}> Hi, I&#39;m Ava. </h1>
                    <h2 class="rotateColor"> About </h2> 
                    <p>
                        I am a Junior honors student majoring in Computer Science, and minoring in both Mathematics and 
                        Data Science at the University of Hartford. I have been coding since I was little, starting off 
                        in Scratch, then moving onto Python and Java. I now have experience in many more languages such 
                        as Clojure, and JavaScript, as well as many tools and frameworks including Git, Azure DevOps, 
                        JupyterNotebook, JUnit, TravisCI and more. I am currently working on several projects both for 
                        myself, and collaborative projects with my clubs including updating this website, and building 
                        Discord bots, just to name a few! I am always looking for new projects to throw myself into to 
                        learn something new, whether it be new coding projects, learning cool things about space, or 
                        drawing.
                    </p>
                </div>
            </header>
        )
    }
}

export default About