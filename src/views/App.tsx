import AppRouter from '../router/router';
import { ThemeProvider } from '../contexts/theme/ThemeProvider';
// import { ThemeLoader as ThemeProvider } from './components/theme/ThemeLoader';

const App = () => (
  <ThemeProvider>
    <AppRouter />
  </ThemeProvider>
);

export default App;
