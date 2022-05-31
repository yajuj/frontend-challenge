import React, { useEffect, useRef } from 'react';
import ListCats from '../components/ListCats';
import { useAppContext } from '../context/app-context';

const Main = () => {
  const { cats, fethData } = useAppContext();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) fethData();
      },
      {
        rootMargin: '100px',
      }
    );
    if (ref.current) observer.observe(ref.current);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ListCats cats={cats} />
      <div ref={ref}/>
    </>
  );
};

export default Main;
