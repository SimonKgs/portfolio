import React from 'react';
import { experienceStyles } from '../styles';
import { WorkExperienceInterface } from '../interfaces/cv.interfaces';
import { monthsConverter } from '../utils/monthsConverter';



export const Experience: React.FC<{ experience: WorkExperienceInterface }> = ({ experience }) => {
  const { position, company, months, technologies } = experience;

  return (
    <>
      <div className={experienceStyles['work']}>
        <p className='title2'>{ position }</p>
        <p className='title3'>{ company }</p>
        <p className='subtitle m1'>
          { monthsConverter(months) }
        </p>
        <div className={experienceStyles['work-technologies']}>
          { technologies!.slice(0, 4).map( tech => (
            <img  className='icon' key={`${tech.name}_work_tech`} src={tech.imgUrl} alt={tech.name}/>
          ))}
        </div>
      </div>
    </>
  )
};
