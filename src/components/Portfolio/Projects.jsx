import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../motion";
import AnimatedLetters from "../AnimatedLetters";

const ProjectCard = ({index, name, description, image, source_code_link,}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{max: 45, scale: 1, speed: 450,}} className='tiltdiv'>
        <div className='imagediv'>
          <img src={image} alt='project_image' className='imageprop' />

          <div className='gitdiv'>
            <div onClick={() => window.open(source_code_link, "_blank")} className='gitclick' >
              <img src={github} alt='source code' className='gitlink' />
            </div>
          </div>
        </div>

        <div className='desc'>
          <h3 className='projname'>{name}</h3>
          <p className='projdesc'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    // const [showTimelinex, setShowTimelinex] = useState(false);

    useEffect(() => {
        setTimeout(() => 
        {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setShowTimelinex(true);
    //     }, 3000);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
    <>
        <div className='projectlisting'>
            <h1 className='projheading'>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
                    idx={15}
                />
            </h1>
            <div className='projindexdiv'>
                {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    </>
  );
};

export default SectionWrapper(Works, "");