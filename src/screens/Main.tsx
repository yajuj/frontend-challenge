import React from 'react';
import ListCats from '../components/ListCats';
import { useAppContext } from '../context/app-context';

const Main = () => {
  const { cats } = useAppContext();
  return <ListCats cats={cats} />;
};

export default Main;
