import React from 'react';
import "./index.scss";
import Loader from 'react-loaders';
import Experience from './Experience';
import {useState, useEffect} from 'react';
import Projects from './Projects';

const Portfolio = () => {

    useEffect(() => {
        // Function to create stars
        const timerId = setTimeout(() => {
        function stars() {
            let count = 500;
            let scene = document.querySelector('.portcont');
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
        }, 1500);
        return () => {
            clearTimeout(timerId);
        };
    }, []);

    const [showTimelinex, setShowTimelinex] = useState(false);

    useEffect(() => {
        const timerx = setTimeout(() => {
          setShowTimelinex(true);
        }, 3000);
        return () => clearTimeout(timerx);
    }, []);

    return (
        <div className="portcont">
            <Loader type="pacman" />
            <Experience />
            {showTimelinex && (
            <Projects />
            )}
        </div>
    );
}

export default Portfolio
