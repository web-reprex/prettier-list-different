import { useEffect, useState } from 'react';

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

export const ThemeToggler = () => {
  const [theme, setTheme] = useState(getSavedTheme());
  const nextTheme = theme === Themes.light ? Themes.dark : Themes.light;
  const changeThemeHandler = () => {
    setTheme(nextTheme);
    saveThem(nextTheme);
  };
  useEffect(() => {
    setThemeAttribute(theme);
  }, [theme]);

  return (
    <button onClick={changeThemeHandler}>Change theme to {nextTheme}</button>
  );
};
