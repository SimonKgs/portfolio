import React from 'react';
import { experienceStyles } from '../styles';
import { Experience } from './Experience.component';
import { workExperiences } from '../data/cv.data';

export const ExperiencesList: React.FC = () => {
  
  return (
    <section id='experience' className={experienceStyles['experience-container']}>
      <p className={experienceStyles['title']}>Related Experience</p>
      <div className={experienceStyles['experiences']}>
        {workExperiences.slice(0, 4).map((work, index) => (
          <Experience key={index} experience={work} />
        ))}
      </div>
    </section>
  );
};
