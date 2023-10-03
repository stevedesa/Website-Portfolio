import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import AnimatedLetters from '../AnimatedLetters';

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";

import "./index.scss";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement className="verticaltimeline"
      contentStyle={{background: "#000", color: "#fff", border: "5px solid #ffd700"}}
      contentArrowStyle={{ borderRight: "12px solid #ffd700" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='iconcircle'>
        <img src={experience.icon} alt={experience.company_name} className='icon' />  
        </div>
        }
    >
      <div className='databox'>
        <h3 className='title'>{experience.title}</h3>
        <div className='textcont'>
            <span className='companyname'>{experience.company_name}</span>
            <span className='date'>{experience.date}</span>
        </div>
        <ul class="points">
            <li class="list-item">{experience.point1}</li>
            <li class="list-item">{experience.point2}</li>
            <li class="list-item">{experience.point3}</li>
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [showTimeline, setShowTimeline] = useState(false);

    useEffect(() => {
        setTimeout(() => 
        {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowTimeline(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
    <>
      <div className='experiencelisting'>
        <h1 className='workheading'>
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={['W','o','r','k',' ','E','x','p','e','r','i','e','n','c','e']}
                idx={15}
            />
        </h1>
        {showTimeline && (
        <div className='timelinecont'>
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                <ExperienceCard key={`experience-${index}`} experience={experience} />
                ))}
            </VerticalTimeline>
        </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");