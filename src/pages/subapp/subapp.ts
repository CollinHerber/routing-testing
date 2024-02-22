import { IRouteViewModel, route } from "@aurelia/router-lite";
import { SubAppPage } from "./sub-app-page/sub-app-page";

const routes = [SubAppPage]
@route({
    path: 'subapp',
    routes: routes,
    title: 'Sub App',
})
export class SubApp implements IRouteViewModel {

}