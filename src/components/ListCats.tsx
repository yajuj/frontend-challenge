import React from 'react';
import { Cat } from '../type/Cat';
import Item from './Item';

interface ListCatsProps {
  cats: Cat[];
}

const ListCats: React.FC<ListCatsProps> = ({ cats }) => {
  return (
    <div className='list-cats'>
      {cats.map(cat => (
        <Item cat={cat} key={cat.id} />
      ))}
    </div>
  );
};

export default ListCats;
