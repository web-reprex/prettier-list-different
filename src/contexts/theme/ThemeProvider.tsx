import { createContext, useContext, useEffect, useState } from 'react';
export enum Themes {
  light = 'light',
  dark = 'dark'
}
export const saveThem = (nextTheme: Themes) =>
  localStorage.setItem('theme', nextTheme);

export const getSavedTheme = () =>
  (localStorage.getItem('theme') as Themes) || Themes.light;

export const setThemeAttribute = (nextTheme: Themes) =>
  document.documentElement.setAttribute('theme', nextTheme);
export const getNextTheme = (theme: Themes) =>
  theme === Themes.light ? Themes.dark : Themes.light;

export const ThemeContext = createContext<Themes | undefined>(undefined);
export const ThemeContextSetState = createContext<CallableFunction | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState(getSavedTheme());
  const nextTheme = getNextTheme(theme);
  const changeThemeHandler = () => {
    setTheme(nextTheme);
    saveThem(nextTheme);
  };

  useEffect(() => {
    // Load theme
    setThemeAttribute(getSavedTheme());
  }, []);
  useEffect(() => {
    // update theme
    setThemeAttribute(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContextSetState.Provider value={changeThemeHandler}>
        {children}
      </ThemeContextSetState.Provider>
    </ThemeContext.Provider>
  );
};
export function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (theme === undefined)
    throw new Error('useThemeContext is not wrapped by <ThemeProvider>');
  return theme;
}
export function useThemeContextSetState() {
  const setTheme = useContext(ThemeContextSetState);
  if (setTheme === undefined)
    throw new Error(
      'useThemeContextSetState is not wrapped by <ThemeProvider>'
    );
  return setTheme;
}
