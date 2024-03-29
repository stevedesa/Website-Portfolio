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

    useEffect(() => {
        // Function to create stars
        function stars() {
            let count = 500;
            let scene = document.querySelector('.about-page');
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
                <p>I'm a Sophomore Computer Science Major studying at the South Dakota School of Mines and Technology.</p>
                <p>I'm Proficient in Python, C, C#, C++, HTML, CSS, JavaScript, SQL, R, Java</p>
                <p>I have experience working with a variety of Frameworks and Technologies, namely: <br/> 
                    .NET, Next.JS, Node.JS, React.JS, Three.JS, Django, Flask, MongoDB</p>
                <p>I'm proficient with a range of Developer Tools, including: 
                    AWS, Git, Visual Studio, MySQL, PyCharm, CLion, IntelliJ, RStudio, Power BI</p>
                <p>I hold Certifications in the following Courses: <br/>
                    Android App and Game Development | 
                    Design and Development of Embedded Systems and Robotics | 
                    Advanced Robotics based on AVR and Raspberry Pi | 
                    Design and Development of IOT | 
                    Advanced MQTT Automation and IOT | 
                    Fullstack Web Development Bootcamp | 
                    Python Pro Bootcamp | 
                    Foundational C# [Microsoft]</p>
                <p>Here are some of my Extracurriculars and Achievements: <br/>
                    Member: Application Development Club, Data Science Club, Society of Hispanic Professional Engineers [SHPE], Cultural
                    Expo [Secretary], India Club [Technology Coordinator]. Fomento Scholar, Winner of numerous Robotics Competitions, Dean’s List Recognition.</p>

                <a href='https://drive.google.com/drive/folders/1CguRaYvqrF47wcXIf01yh9o0Gjzr2VZ1?usp=sharing' target='_blank' rel="noreferrer">
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
 