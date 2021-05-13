import { Home, Profile } from "../../pages";

export interface RouteType {
  path: string;
  component: React.FC;
  exact: boolean;
}

export const route: RouteType[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/users/:id',
    component: Profile,
    exact: true,
  },
]
