import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useAppContext } from './context/app-context';
import ScreenComponent from './Screen';

function App() {
  const { isLoading, error } = useAppContext();

  return (
    <>
      <Navbar />
      <ScreenComponent />
      {error && <p>{error}</p>}
      {isLoading && <div className='spinner'></div>}
    </>
  );
}

export default App;
