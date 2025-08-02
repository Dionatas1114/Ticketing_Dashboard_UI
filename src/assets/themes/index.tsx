import { useContext, useMemo, createContext, Dispatch, SetStateAction } from 'react';
import { useMediaQuery, ThemeProvider as MuiThemeProvider, PaletteMode } from '@mui/material';

import AppTheme from '../themes/AppTheme';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type ThemeProps = {
  theme: PaletteMode;
  setTheme: void;
};

export const ThemeContext = createContext<ThemeProps>({} as ThemeProps);

const ThemeProvider = ({ children }: ChildrenProps) => {
  const { theme } = useContext(ThemeContext);
  const themeCreated = useMemo(() => AppTheme({ children, themeComponents: theme }), [theme]);

  return <MuiThemeProvider theme={themeCreated} children={children} />;
};

export const AppThemeProvider = ({ children }: ChildrenProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const { getValue, setValue } = useLocalStorage();

  const theme = getValue('theme') as PaletteMode;
  const setTheme = setValue('theme', prefersDarkMode ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider children={children} />
    </ThemeContext.Provider>
  );
};
