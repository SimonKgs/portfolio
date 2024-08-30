import React from 'react'
import { EducationInterface } from '../interfaces/cv.interfaces'
import { educationStyles } from '../styles';


export const Education: React.FC<{education: EducationInterface}> = ({education}) => {
  const {degree, details, institution, year } = education
  
  return (
    <div className={educationStyles['education-container']}>
      <p className='title2'>{ degree }</p>
      { education.teacher &&
          <p className='title3'>{ education.teacher }</p>
      }
      <p className='subtitle m2'>{ institution } - { year }</p>
      <p className='text'>{ details}</p>
      {education.degreeImg && 
        <img src={education.degreeImg} alt={`${ degree } Title Image`} />
      }
    </div>
  )
}
