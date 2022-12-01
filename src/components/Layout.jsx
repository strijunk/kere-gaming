import React, { createContext, useContext, useState } from 'react';
import useClearance from '../core/hooks/useClearance';
import { GrGamepad, GrUser, GrGift, GrMoon, GrSun } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

export const ThemeContext = createContext(null);

const Layout = ({ children }) => {
  const [minHeight, upperRef, lowerRef] = useClearance();
  const [theme, setTheme] = useState('light');

  return (
    <>
      <header ref={upperRef}>
        <NavLink to='/'>
          <h2 id='titleGroup'>Kere Gaming</h2>
        </NavLink>
        <p>Solusi gaming tanpa menyiksa dompet</p>
      </header>
      <ThemeContext.Provider value={theme}>
        <main
          className={`main ${theme === 'dark' ? 'dark' : ''}`}
          style={{
            minHeight,
          }}
        >
          {children}
        </main>
      </ThemeContext.Provider>
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
        <div
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className='iconwrapper'
          style={{
            cursor: 'pointer',
          }}
        >
          {theme === 'light' ? (
            <>
              <GrMoon className='icon' />
              Dark Mode
            </>
          ) : (
            <>
              <GrSun className='icon' />
              Light Mode
            </>
          )}
        </div>
      </footer>
    </>
  );
};

export default Layout;
