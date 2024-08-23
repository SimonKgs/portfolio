import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '.';
import { Stars } from './Stars.component';



export const Layout: React.FC = () => {

  return (
    <div>
      <Stars />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
