import React from 'react';
import ListCats from '../components/ListCats';
import { useAppContext } from '../context/app-context';

const Fav = () => {
  const { favoriteCats } = useAppContext();
  return <ListCats cats={favoriteCats} />;
};

export default Fav;
