import { lazy } from 'react';
import { RoleAccessLevel } from '../../types/auth';

const Dashboard = lazy(() => import('../../views/pages/Dashboard/Dashboard'));

const DashboardRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    exact: true,
    meta: {
      requiredLevel: RoleAccessLevel.User,
      title: 'Dashboard',
      icon: 'icon-home'
    }
  }
];

export default DashboardRoutes;
