import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import './index.scss';
import { CPlusPlus, Css3, Html5, Javascript, Python, ReactLogo } from 'styled-icons/boxicons-logos';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => 
        {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a Sophomore majoring in Computer Science at the South Dakota School of Mines and Technology</p>
                <p>I'm Proficient in C, C#, C++, Python, HTML, CSS, JavaScript, R and Java.</p>
                <p>I have experience working with a variety of Frameworks, namely Flask, React.JS, Node.JS, Express.JS, 
                    MongoDB, SQL, SQLite, Bootstrap, JQuery and Tkinter.</p>
                <p>I'm proficient with a range of Developer Tools, including Git, GitHub, VS Code, Visual Studio, PyCharm, 
                    CLion, IntelliJ, and RStudio.</p>
                <p>I hold Certifications in the following Courses: <br/>
                    Android App and Game Development | 
                    Design and Development of Embedded Systems and Robotics | 
                    Advanced Robotics based on AVR and Raspberry Pi | 
                    Design and Development of IOT | 
                    Advanced MQTT Automation and IOT | 
                    Fullstack Web Development Bootcamp | 
                    Python Pro Bootcamp | 
                    Foundational C# [Microsoft]</p>
                <p>Some of my Extracurriculars & Achievements include: <br/>
                    ICPC Coding Team, Application Development Club, Data Science Club, Technology Coordinator - India Club, 
                    Cultural Expo Committee, Technology Chair - Chi Psi Fraternity, Fomento Scholar, Victorious in numerous Robotics Competitions,
                    Dean’s List Recognition.</p>

                <a href='https://drive.google.com/file/d/1a1Hfbvj3iwViThYOnqMyc-WYHBYWAXc-/view?usp=drive_link' target='_blank'>
                    <button className='resume'>MY RESUME</button>
                </a>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <Python color="#306998" height={150} width={150}/>
                    </div>
                    <div className='face2'>
                        <ReactLogo color="#61DBFB" height={150} width={150}/>
                    </div>
                    <div className='face3'>
                        <Html5 color="#F06529" height={150} width={150}/>
                    </div>
                    <div className='face4'>
                        <CPlusPlus color="#555555" height={150} width={150}/>
                    </div>
                    <div className='face5'>
                        <Javascript color="#EFD81D" height={150} width={150}/>
                    </div>
                    <div className='face6'>
                        <Css3 color="#28A4D9" height={150} width={150}/>
                    </div>

                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About 
 