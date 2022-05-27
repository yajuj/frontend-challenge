import React from 'react';
import { useAppContext } from '../context/app-context';

const Navbar = () => {
  const { screen, setScreen } = useAppContext();
  return (
    <nav className='nav'>
      <div onClick={() => setScreen('main')} className='nav-item'>
        Все котики
      </div>
      <div onClick={() => setScreen('fav')} className='nav-item'>
        Любимые Котики
      </div>
    </nav>
  );
};

export default Navbar;
