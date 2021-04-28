import AppRouter from '../router/router';
import { ThemeLoader } from './components/theme/ThemeLoader';

const App = () => (
  <ThemeLoader>
    <AppRouter />
  </ThemeLoader>
);

export default App;
