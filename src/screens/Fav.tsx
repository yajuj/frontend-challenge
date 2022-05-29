import React from 'react';
import ListCats from '../components/ListCats';
import { useAppContext } from '../context/app-context';

const Fav = () => {
  const { favoriteCats, isLoading, setScreen } = useAppContext();

  if (!favoriteCats.length && !isLoading)
    return (
      <>
        <p>Пока у вас нет любимых котов 😿</p>
        <button onClick={() => setScreen('main')} className='btn btn-add-cat'>
          Добавить? 🐱‍💻
        </button>
      </>
    );
  return <ListCats cats={favoriteCats} />;
};

export default Fav;
