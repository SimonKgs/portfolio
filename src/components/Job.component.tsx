import React from 'react'
import { WorkExperienceInterface } from '../interfaces/cv.interfaces'
import { jobStyles } from '../styles'
import { monthsConverter } from '../utils/monthsConverter';

export const Job: React.FC<{job: WorkExperienceInterface}> = ({job}) => {

  const {company, description, months, position} = job

  return (
    <div className={jobStyles['job-container']}>
      <p className='title2'>{ company }</p>
      <p className='title3'>{ position }</p>
      <p className='subtitle m2'>
      { monthsConverter(months) }
      </p>
      <p className='text'>{ description } </p>
    </div>
  )
}
