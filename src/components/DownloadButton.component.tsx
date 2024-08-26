import React from 'react'

import { cv } from '../assets'
import { profileStyles } from '../styles'

export const DownloadButton: React.FC = () => {
  return (
    <div className={profileStyles['download-container']}>
      <p>Download my CV here:</p>
      <div className={profileStyles['download-buttons-container']}>
        <a className={profileStyles['download-button']} href={cv} download="simon-quiros-cv.pdf">
          English
        </a>
        <a className={profileStyles['download-button']} href={cv} download="simon-quiros-cv.pdf">
          Spanish
        </a>
      </div>
    </div>
  )
}
