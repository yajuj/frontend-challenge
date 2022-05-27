import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cat } from './type/Cat';
import api from './api/api';
import { AxiosResponse } from 'axios';
import Navbar from './components/Navbar';

import { useAppContext } from './context/app-context';
import ListCats from './components/ListCats';
import ScreenComponent from './Screen';

function App() {
  const { isLoading, error, cats } = useAppContext();

  if (isLoading)
    return (
      <div className='spinner-wrapper'>
        <div className='spinner'></div>
      </div>
    );
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <ScreenComponent />
      </div>
    </>
  );
}

export default App;
