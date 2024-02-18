import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router-lite';

import '@material/web/all';
import { App } from './app';


await Aurelia
    .register(
        RouterConfiguration.customize({
            useUrlFragmentHash: false,
        }),
    )
    .app(App)
    .start();
