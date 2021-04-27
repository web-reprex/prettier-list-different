import { lazy } from 'react';
import { RoleAccessLevel } from '../../types/auth';

const Login = lazy(() => import('../../views/pages/Login/Login'));

const LoginRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    exact: false,
    meta: {
      requiredLevel: RoleAccessLevel.Viewer,
      title: 'Login',
      icon: 'icon-login'
    }
  }
];

export default LoginRoutes;
