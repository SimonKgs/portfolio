import React from 'react';
import { experienceStyles } from '../styles';
import { WorkExperienceInterface } from '../interfaces/cv.interfaces';
import { monthsConverter } from '../utils/monthsConverter';



export const Experience: React.FC<{ experience: WorkExperienceInterface }> = ({ experience }) => {
  const { position, company, months, technologies } = experience;

  return (
    <>
      <div className={experienceStyles['work']}>
        <p className={experienceStyles['work-position']}>{ position }</p>
        <p className={experienceStyles['work-company']}>{ company }</p>
        <p className={experienceStyles['work-time']}>
          { monthsConverter(months) }
        </p>
        <div className={experienceStyles['work-technologies']}>
          { technologies.slice(0, 4).map( tech => (
            <img key={`${tech.name}_work_tech`} src={tech.imgUrl} alt={tech.name}/>
          ))}
        </div>
      </div>
    </>
  );
};
