import {RouteProps} from 'react-router-dom';
import {MainPage} from '@/pages/Main';
import {ChatPage} from '@/pages/ChatPage';
import {NotFoundPage} from '@/pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  CHAT = 'chat',
  NOT_FOUND = 'notFound'
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CHAT]: '/chat',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.CHAT]: {
    path: RoutePath.chat,
    element: <ChatPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />
  },
};