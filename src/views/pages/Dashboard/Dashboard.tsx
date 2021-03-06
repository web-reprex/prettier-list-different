import { NavLink } from 'react-router-dom';
import { Counter } from '../../../features/counter/Counter';
import { ThemeToggler } from '../../components/theme/ThemeToggler';

const Dashboard = () => {
  return (
    <div>
      <ThemeToggler />
      <h3>Dashboard</h3>
      <nav>
        <li>
          <NavLink to="/dashboard">dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      </nav>
      <Counter />
    </div>
  );
};

export default Dashboard;
