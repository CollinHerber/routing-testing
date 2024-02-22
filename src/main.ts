import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router-lite';

import '@material/web/all';
import { App } from './app';
import * as ValueConverters from './resources';


await Aurelia
    .register(
        RouterConfiguration.customize({
            useUrlFragmentHash: false,
        }),
    )
    .register(ValueConverters)
    .app(App)
    .start();
