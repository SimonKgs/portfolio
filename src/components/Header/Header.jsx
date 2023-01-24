import React from 'react'
import { Menu } from './Menu'
import { Topbar } from './Topbar'

export const Header = () => {
  return (
    <div className='Header'>
        <Topbar />
        <Menu />
    </div>
  )
}
