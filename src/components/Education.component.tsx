import React from 'react'
import { EducationInterface } from '../interfaces/cv.interfaces'
import { educationStyles } from '../styles';


export const Education: React.FC<{education: EducationInterface}> = ({education}) => {
  const {degree, details, institution, year } = education
  
  return (
    <div className={educationStyles['education-container']}>
      <p className={ educationStyles['education-title'] }>{ degree }</p>
      { education.teacher &&
          <p className={ educationStyles.teacher }>{ education.teacher }</p>
      }
      <p className={educationStyles.subinfo}>{ institution } - { year }</p>
      <p>{ details}</p>
      {education.degreeImg && 
        <img src={education.degreeImg} alt={`${ degree } Title Image`} />
      }
    </div>
  )
}
