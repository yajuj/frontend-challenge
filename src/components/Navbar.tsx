import React from 'react';
import { useAppContext } from '../context/app-context';

const Navbar = () => {
  const { screen, setScreen } = useAppContext();
  return (
    <nav className='nav'>
      <div
        onClick={() => setScreen('main')}
        className={screen === 'main' ? 'nav-item-active nav-item' : 'nav-item'}
      >
        Все Котики
      </div>
      <div
        onClick={() => setScreen('fav')}
        className={screen === 'fav' ? 'nav-item-active nav-item' : 'nav-item'}
      >
        Любимые Котики
      </div>
    </nav>
  );
};

export default Navbar;
