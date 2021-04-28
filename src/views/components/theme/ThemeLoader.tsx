import { useEffect } from 'react';
import { getSavedTheme, setThemeAttribute } from './ThemeToggler';

export const ThemeLoader = ({ children }: { children: JSX.Element }) => {
  useEffect(() => {
    setThemeAttribute(getSavedTheme());
  }, []);
  return <>{children}</>;
};
