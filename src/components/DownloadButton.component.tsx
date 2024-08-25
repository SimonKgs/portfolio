import React from 'react'

import { cv } from '../assets'
import { profileStyles } from '../styles'

export const DownloadButton: React.FC = () => {
  return (
    <a className={profileStyles['download-button']} href={cv} download="simon-quiros-cv.pdf">
        Download my CV
    </a>
  )
}
