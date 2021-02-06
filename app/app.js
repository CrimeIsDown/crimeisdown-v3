/*eslint-disable no-console*/
import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'crimeisdown/config/environment';

import { InitSentryForEmber } from '@sentry/ember';

if (config['@sentry/ember']) {
  InitSentryForEmber();
}

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
