import React from 'react';
import ListCats from '../components/ListCats';
import { useAppContext } from '../context/app-context';

const Main = () => {
  const { cats, fethData } = useAppContext();
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, _observer) => {
        if (entries[0].isIntersecting) {
          fethData();
        }
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
      <div ref={ref}></div>
    </>
  );
};

export default Main;
