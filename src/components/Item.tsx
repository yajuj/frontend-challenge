import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAppContext } from '../context/app-context';
import { Cat } from '../type/Cat';

interface ItemProps {
  cat: Cat;
}

const Item: React.FC<ItemProps> = ({ cat }) => {
  const { favoriteCats, toogleFavorite } = useAppContext();
  const isFavorite = favoriteCats.some(_cat => _cat.id === cat.id);
  return (
    <div className='cat-image'>
      <img src={cat.url} alt='cat' />
      <div className='icons' onClick={() => toogleFavorite(cat)}>
        <FaHeart
          color={isFavorite ? '#ff3a00' : '#f24e1e'}
          className={` ${isFavorite ? 'fav' : 'fill-heart'}`}
          size={50}
        />
        <FaRegHeart color='#f24e1e' className='outline-heart' size={50} />
      </div>
    </div>
  );
};

// #ff3a00

export default Item;
