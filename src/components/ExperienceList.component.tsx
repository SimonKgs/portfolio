import React from 'react';
import { experienceStyles } from '../styles';
import { Experience } from './';
import { workExperiences } from '../data/cv.data';

export const ExperiencesList: React.FC = () => {
  
  return (
    <section id='experience' className={experienceStyles['experience-container']}>
      <p className='title underline m1'>Related Experience</p>
      <div className={experienceStyles['experiences']}>
        {workExperiences.slice(0, 4).map((work, index) => (
          <Experience key={index} experience={work} />
        ))}
      </div>
    </section>
  );
};
