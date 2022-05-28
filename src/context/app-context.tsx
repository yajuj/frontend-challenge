import React from 'react';
import api from '../api/api';

import { Cat } from '../type/Cat';

interface AppContexProviderProps {
  children: React.ReactNode;
}

interface ContextState {
  cats: Cat[];
  favoriteCats: Cat[];
  isLoading: boolean;
  error: string | null;
  screen: ScreensEnum;
  setScreen: (str: ScreensEnum) => void;
  toogleFavorite: (cat: Cat) => void;
  setPage: (pageNumber: number) => void;
  page: number;
}

type ScreensEnum = 'main' | 'fav';

const Context = React.createContext<ContextState>({} as ContextState);

const AppContexProvider: React.FC<AppContexProviderProps> = ({ children }) => {
  const [cats, setCats] = React.useState<Cat[]>([]);
  const [favoriteCats, setFavoriteCats] = React.useState<Cat[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [screen, setScreen] = React.useState<ScreensEnum>('main');
  const [page, setPage] = React.useState<number>(1);

  React.useEffect(() => {
    fethData('');
    loadFavoritesCatsFromLocalStorage();
  }, []);

  const fethData = async (url: string, params?: URLSearchParams) => {
    try {
      setIsLoading(true);
      const { data } = await api.get<Cat[]>(url, {
        params,
      });
      setCats(_data => [..._data, ...data]);
    } catch (error: any) {
      setError('Произошла ошибка при загрузки картинок');
    } finally {
      setIsLoading(false);
    }
  };

  const loadFavoritesCatsFromLocalStorage = () => {
    const catsFromLocalStorage: Cat[] = JSON.parse(
      localStorage.getItem('cats') || '[]'
    );
    setFavoriteCats(catsFromLocalStorage);
  };

  const toogleFavorite = (_cat: Cat) => {
    let catsFromLocalStorage: Cat[] = JSON.parse(
      localStorage.getItem('cats') || '[]'
    );
    if (catsFromLocalStorage.some(cat => cat.id === _cat.id)) {
      catsFromLocalStorage = catsFromLocalStorage.filter(
        cat => cat.id !== _cat.id
      );
    } else {
      catsFromLocalStorage.push(_cat);
    }
    setFavoriteCats(catsFromLocalStorage);
    localStorage.setItem('cats', JSON.stringify(catsFromLocalStorage));
  };

  const _setScreen = (str: ScreensEnum) => {
    setScreen(str);
  };

  const _setPage = (pageNumber: number) => {
    setPage(pageNumber);
    const params = new URLSearchParams();
    params.append('page', (page + 1).toString());
    fethData('', params);
    console.log('fdsa');
  };

  return (
    <Context.Provider
      value={{
        cats,
        isLoading,
        error,
        favoriteCats,
        toogleFavorite,
        screen,
        setScreen: _setScreen,
        page,
        setPage: _setPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => React.useContext(Context);

export default AppContexProvider;
