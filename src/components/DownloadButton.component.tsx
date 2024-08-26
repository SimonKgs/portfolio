import React from 'react'

import { cv, cvSpanish } from '../assets'
import { profileStyles } from '../styles'

export const DownloadButton: React.FC = () => {
  return (
    <div className={profileStyles['download-container']}>
      <p>Download my CV here:</p>
      <div className={profileStyles['download-buttons-container']}>
        <a className={profileStyles['download-button']} href={cv} download="simon-quiros.pdf">
          English
        </a>
        <a className={profileStyles['download-button']} href={cvSpanish} download="simon-quiros.pdf">
          Spanish
        </a>
      </div>
    </div>
  )
}
