import AppRouter from '../router/router';
import { ThemeProvider } from '../contexts/theme/ThemeProvider';

const App = () => (
  <ThemeProvider>
    <AppRouter />
  </ThemeProvider>
);

export default App;
