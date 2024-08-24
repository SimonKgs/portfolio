import React from 'react'

import { cv } from '../assets'
import { profileStyles } from '../styles'

export const DownloadButton: React.FC = () => {
  return (
    <a className={profileStyles['download-button']} href={cv} download="cv.pdf">
        Download my CV
    </a>
  )
}
