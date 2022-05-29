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
  setScreen: (screen: ScreensEnum) => void;
  toogleFavorite: (cat: Cat) => void;
  fethData: () => void;
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
  let page: number = 0;

  React.useEffect(() => {
    loadFavoritesCatsFromLocalStorage();
  }, []);

  const fethData = async () => {
    try {
      setIsLoading(true);

      const { data } = await api.get<Cat[]>('', {
        params: { page: ++page },
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

  const _setScreen = (screen: ScreensEnum) => {
    setScreen(screen);
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
        fethData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => React.useContext(Context);

export default AppContexProvider;
