
import { route } from '@aurelia/router-lite';
import { Home } from './pages/home/home';
import { SignIn } from './pages/sign-in/sign-in';
import { UnknownRoute } from './pages/unknown-route/unknown-route';

import './app.scss';

const routes = [Home, SignIn, UnknownRoute];
@route({ title: 'Test App', routes: routes, fallback: '404' })
export class App {

}
