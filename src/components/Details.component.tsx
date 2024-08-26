import React from 'react'
import { detailsStyles } from '../styles'
import { JobList, Skills, EducationList } from './'

export const Details: React.FC = () => {
  return (
    <>
        <section id='skills' className={detailsStyles['details-container']}>
            <Skills />    
        </section>
        <div id='education' className={detailsStyles['details-container']}>
            <EducationList />           
        </div>
        <div id='full-experience' className={detailsStyles['details-container']}>
            <JobList />           
        </div>
    </>
  )
}
