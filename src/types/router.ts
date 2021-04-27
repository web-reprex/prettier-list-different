import { RoleAccessLevel } from './auth';
import { Component } from 'react';

export interface Route {
  path: string;
  name: string;
  component: Component | CallableFunction;
  exact: boolean;
  meta: RouteMeta;
}
export interface RouteMeta {
  requiredLevel: RoleAccessLevel;
  icon: string;
  title: string;
}
