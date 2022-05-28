import React from 'react';
import ListCats from '../components/ListCats';
import { useAppContext } from '../context/app-context';

const Main = () => {
  const { cats, page, setPage } = useAppContext();
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setPage(page + 1);
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 1,
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
