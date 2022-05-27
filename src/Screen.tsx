import React from 'react';
import { useAppContext } from './context/app-context';
import Fav from './screens/Fav';
import Main from './screens/Main';

const ScreenComponent = () => {
  const { screen } = useAppContext();
  switch (screen) {
    case 'main':
      return <Main />;
    case 'fav':
      return <Fav />;
  }
};

export default ScreenComponent;
