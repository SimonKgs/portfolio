import React from 'react'
import { WorkExperienceInterface } from '../interfaces/cv.interfaces'
import { jobStyles } from '../styles'
import { monthsConverter } from '../utils/MonthsConverter'

export const Job: React.FC<{job: WorkExperienceInterface}> = ({job}) => {

  const {company, description, months, position} = job

  return (
    <div className={jobStyles['job-container']}>
      <p className={jobStyles['job-title']}>{ company }</p>
      <p className={jobStyles['job-title']}>{ position }</p>
      <p className={jobStyles.timeWorking}>
      { monthsConverter(months) }
      </p>
      <p>{ description } </p>
    </div>
  )
}
