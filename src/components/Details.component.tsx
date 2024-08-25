import React from 'react'
import { detailsStyles } from '../styles'
import { Education, FullExperience, Skills } from './'

export const Details: React.FC = () => {
  return (
    <>
        <section id='skills' className={detailsStyles['details-container']}>
            <Skills />    
        </section>
        <div className={detailsStyles['details-container']}>
            <Education />           
        </div>
        <div className={detailsStyles['details-container']}>
            <FullExperience />           
        </div>
    </>
  )
}
