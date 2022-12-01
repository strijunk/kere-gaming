import React, { useState, createContext, useEffect } from 'react';
import useClearance from '../core/hooks/useClearance';
import { GrGamepad, GrUser, GrGift } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

export const LanguagesContext = createContext(null);

const Layout = ({ children }) => {
  const [minHeight, upperRef, lowerRef] = useClearance();

  return (
    <>
      <header ref={upperRef}>
        <NavLink to='/'>
          <h2 id='titleGroup'>Kere Gaming</h2>
        </NavLink>
        <p>Solusi gaming tanpa menyiksa dompet</p>
      </header>
      <LanguagesContext.Provider value={'language'}>
        <main style={{ minHeight, paddingTop: '40px' }}>{children}</main>
      </LanguagesContext.Provider>
      <footer ref={lowerRef}>
        <NavLink to='/' className='iconwrapper'>
          <GrGamepad className='icon' />
          Game
        </NavLink>
        <NavLink to='/giveaway' className='iconwrapper'>
          <GrGift className='icon' />
          Giveaway
        </NavLink>
        <NavLink to='/profile' className='iconwrapper'>
          <GrUser className='icon' />
          Profile
        </NavLink>
      </footer>
    </>
  );
};

export default Layout;
