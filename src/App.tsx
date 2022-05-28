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
      <div className='wrapper'>
        <ScreenComponent />
      </div>
      {error && <p>{error}</p>}
      {isLoading && (
        <div className='spinner-wrapper'>
          <div className='spinner'></div>
        </div>
      )}
    </>
  );
}

export default App;
