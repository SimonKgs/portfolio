import React from 'react'
import { detailsStyles } from '../styles'

interface ProgressBarProps {
    ability: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ability}) => {
  return (
    <div className={detailsStyles['progress-bar']}>
        <div 
            className={detailsStyles['progress-bar-load']}
            style={{ width: `${ability}%` }}
        >
            {ability}%
        </div>
    </div>
  )
}
