import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s1.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { motion } from 'framer-motion';
import { slideIn } from '../../motion';
import EarthCanvas from '../../Earth';

//https://styled-icons.dev //Icons

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const Greetings = ['H', 'i', ' ', 'T', 'h', 'e', 'r', 'e', '!']
    const Buildup = ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's',]
    const nameArray = ['t', 'e', 'v', 'e', ' ', 'N', 'a', 't', 'h', 'a', 'n', ' ', 'd', 'e', ' ', 'S', 'a']

    useEffect(() => {
        setTimeout(() => 
        {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    useEffect(() => {
        // Function to create stars
        function stars() {
            let count = 500;
            let scene = document.querySelector('.home-page');
            let i = 0;
            while (i < count) {
                let star = document.createElement("i");
                let x = Math.floor(Math.random() * window.innerWidth);
                let y = Math.floor(Math.random() * window.innerHeight);
                let duration = Math.random() * 10;
                let size = Math.random() * 2;

                star.style.left = x + 'px';
                star.style.top = y + 'px';
                star.style.width = 1 + size + 'px';
                star.style.height = 1 + size + 'px';
                star.style.animationDuration = 5 + duration + 's';
                star.style.animationDelay = duration + 's';

                scene.appendChild(star);
                i++;
            }
        }
        stars();
    }, []);

    const [showTimelinexy, setShowTimelinexy] = useState(false);

    useEffect(() => {
        const timerxy = setTimeout(() => {
          setShowTimelinexy(true);
        }, 3000);
        return () => clearTimeout(timerxy);
    }, []);

    return (
        <>
        <div className='hidden'>
            <h1>Sorry:/ Working on Optimizing the Website for a Phone Browser!</h1>
        </div>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={Greetings} idx={12} />
                <br/> 
                <AnimatedLetters letterClass={letterClass} strArray={Buildup} idx={21} />
                <br/>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={31} /> 
                </h1>
                <h2>COMPUTER SCIENCE MAJOR @SDSMT</h2>
                <div className='linkbutts'>
                    <Link to="/about" className='flat-button'>FIND OUT MORE ABOUT ME!</Link>
                    <Link to="/portfolio" className='flat-button'>CHECK OUT MY PERSONAL PORTFOLIO!</Link>
                </div>
            </div>
        </div>
        {showTimelinexy && (
        <div className='earthanimdiv'>
            <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='earthobjdiv'>
                <EarthCanvas />
            </motion.div>
        </div>
        )}
        <Loader type="pacman" />
        </>
    );
}

export default Home