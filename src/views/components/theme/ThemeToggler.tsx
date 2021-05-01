import {
  getNextTheme,
  useThemeContext,
  useThemeContextSetState
} from '../../../contexts/theme/ThemeProvider';

export const ThemeToggler = () => {
  const theme = useThemeContext();
  const nextTheme = getNextTheme(theme);
  const setTheme = useThemeContextSetState();
  return (
    <button onClick={() => setTheme()}>Change theme to {nextTheme}</button>
  );
};
