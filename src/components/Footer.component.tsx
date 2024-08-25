import React from 'react'

import { footerStyles } from '../styles'
 
export const Footer: React.FC = () => {
    return (
        <footer className={footerStyles['footer-container']}>
          <p className={footerStyles['footer-text']}>
            &copy; {new Date().getFullYear()} Portfolio. By Simón Gléz Quirós. All rights reserved.
          </p>
        </footer>
      );
}
