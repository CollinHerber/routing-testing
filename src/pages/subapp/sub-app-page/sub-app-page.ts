import { IRouteViewModel, route } from "@aurelia/router-lite";

@route({
    id: 'something',
    path: '',
    title: 'something'
})
export class SubAppPage implements IRouteViewModel {

}