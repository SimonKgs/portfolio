import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Stars } from './';


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
