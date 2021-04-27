import LoginRoutes from './Login';
import DashboardRoutes from './Dashboard';
import ErrorsRoutes from './Errors';

const Routes = [...LoginRoutes, ...DashboardRoutes, ...ErrorsRoutes];

export default Routes;
