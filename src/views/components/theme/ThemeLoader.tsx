import { useEffect } from 'react';
import {
  getSavedTheme,
  setThemeAttribute
} from '../../../contexts/theme/ThemeProvider';

export const ThemeLoader = ({ children }: { children: JSX.Element }) => {
  useEffect(() => {
    setThemeAttribute(getSavedTheme());
  }, []);
  return <>{children}</>;
};
