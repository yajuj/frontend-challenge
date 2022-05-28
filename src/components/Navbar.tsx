import React from 'react';
import { useAppContext } from '../context/app-context';

const Navbar = () => {
  const { screen, setScreen } = useAppContext();
  return (
    <nav className='nav'>
      <div
        onClick={() => setScreen('main')}
        className={screen === 'fav' ? 'nav-item' : 'nav-item-active nav-item'}
      >
        Все котики
      </div>
      <div
        onClick={() => setScreen('fav')}
        className={screen === 'main' ? 'nav-item' : 'nav-item-active nav-item'}
      >
        Любимые Котики
      </div>
    </nav>
  );
};

export default Navbar;
