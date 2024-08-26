import React from 'react'
import { skillsStyles } from '../styles'

interface ProgressBarProps {
    ability: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ability}) => {
  return (
    <div className={skillsStyles['progress-bar']}>
        <div 
            className={skillsStyles['progress-bar-load']}
            style={{ width: `${ability}%` }}
        >
            {ability}%
        </div>
    </div>
  )
}
