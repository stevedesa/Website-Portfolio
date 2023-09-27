import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

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

    return (
        <>
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
                <Link to="/contact" className='flat-button'>REACH OUT TO ME!</Link>

            </div>
            <Logo></Logo>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home