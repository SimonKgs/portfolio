import React from 'react'

import { technologies } from '../data/cv.data'

import {
    profilePicture,
    emailIcon,
    github,
    linkedin,
} from '../assets'

import { profileStyles } from '../styles'
import { DownloadButton } from './';


export const Profile: React.FC = () => {
    
    return (
        <>
            <div className={profileStyles['profile-image']}>
                <img src={ profilePicture } alt="Image of myself" />
            </div>
            <div className={profileStyles['profile-whoami']}>
                <p className='title'>Simón</p>
                <p className='title'>González Quirós</p>
                <p className='title'>JavaScript Developer</p>
            </div>
            <div className={profileStyles['profile-technologies']}>
                {technologies.slice(0, 5).map( ({name , imgUrl}) => (
                    <div key={`${name}div`} className={profileStyles['profile-technology']}>
                        <img className='icon' key={name} src={imgUrl} alt={name}/>
                    </div>
                ))} 
            </div>
            <div className={profileStyles['profile-description']}>
                <p className='text'>I am a web developer focused on frontend development, particularly in JavaScript and TypeScript. I have strong knowledge of React, which is the framework I know best, but I've also used Angular, Next.js, and Vue in some projects, allowing me to adapt to different technologies as needed.</p>
                <br />
                <p className='text'>While my primary expertise is in frontend development, I have a growing interest in backend development. I have good knowledge of Node.js and have recently dedicated significant time to learning Python, expanding my backend capabilities.</p>
            </div>
            <div className={profileStyles['profile-contact-me']}>
                <a href='https://github.com/simonKgs' target='_blank'>
                    <img className='icon' src={ github } alt='Github Icon'/>
                    <p className='link'>simonKgs</p>
                </a>
                <a href='https://www.linkedin.com/in/simongq/' target='_blank'>
                    <img className='icon' src={ linkedin } alt='LinkedIn Icon' />
                    <p className='link'>simongq</p>
                </a>
                <a href='mailto:simongonzalezquir@gmail.com'>
                    <img className='icon' src={ emailIcon } alt='Email Icon'/>
                    <p className='link'>simongonzalezquir@gmail.com</p>
                </a>
            </div>
            <DownloadButton />
        </>
    )
}
