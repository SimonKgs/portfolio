import React from 'react';
import { experienceStyles } from '../styles';
import { WorkExperience } from '../interfaces/cv.interfaces';



export const Experience: React.FC<{ experience: WorkExperience }> = ({ experience }) => {
  const { position, company, months, technologies } = experience;

  return (
    <>
      <div className={experienceStyles['work']}>
        <p className={experienceStyles['work-position']}>{ position }</p>
        <p className={experienceStyles['work-company']}>{ company }</p>
        <p className={experienceStyles['work-time']}>
          {months % 12 === 0
            ? `${months / 12} ${months / 12 > 1 ? 'Years' : 'Year'}`
            : `${months} ${months > 1 ? 'Months' : 'Month'}`}
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
