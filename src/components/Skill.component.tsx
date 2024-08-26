import React from 'react'
import { SkillInterface } from '../interfaces/cv.interfaces';
import { ProgressBar } from './ProgressBar.component';
import { skillsStyles } from '../styles';

export const Skill:React.FC<SkillInterface> = ({tech, ability}) => {
  return (
    <div className={skillsStyles.skill}>
        <div className={skillsStyles['skill-tech']}>
            <img src={tech.imgUrl} alt={tech.name} />
            <p>{tech.name}</p>
        </div>
        <ProgressBar ability={ability}/>
    </div>
  )
}
