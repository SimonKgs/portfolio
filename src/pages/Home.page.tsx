import React from 'react'

import { Profile } from '../components/Profile.component';
import { homeStyles } from '../styles';
import { ExperiencesList } from '../components/ExperienceList.component';
import { ProjectList } from '../components/ProjectList.component';

export const Home: React.FC = () => {
  return (
 
      <div className={homeStyles['home-container']}>
        <section id='profile' className={homeStyles['home-profile']}>
          <Profile />
        </section>
        
        <div className={ homeStyles['home-info'] }>
          <ExperiencesList />
          <ProjectList />
        </div>
      </div>
  )
}
