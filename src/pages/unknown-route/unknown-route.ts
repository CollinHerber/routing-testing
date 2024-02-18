import { IRouteViewModel, route } from '@aurelia/router-lite';

@route({
    path: '404',
    title: '404',
})
export class UnknownRoute implements IRouteViewModel {

}
