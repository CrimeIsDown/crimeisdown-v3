/* eslint-env node */
'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'crimeisdown',
    environment,
    rootURL: '/',
    locationType: 'auto',
    historySupportMiddleware: true,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      MEDIA_PLAYER_DEBUG: false,
      SITE_NAME_TEXT: 'CrimeIsDown.com',
      SITE_NAME_HTML: 'CrimeIsDown.com',
      // SITE_NAME_TEXT: 'Sirens',
      // SITE_NAME_HTML: '<i class="em em-rotating_light"></i> Sirens'
    },
  };

  ENV['@sentry/ember'] = {
    disablePerformance: true,
    sentry: {
      dsn: 'https://fc1365bf53c34718b4674383752e1080@sentry.io/154438',
      enabled: environment === 'production',
      environment,
      denyUrls: ['platform.twitter.com'],
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: 'UA-30674963-11',
    };
    ENV.APP.MEDIA_PLAYER_DEBUG = false;
  }

  return ENV;
};
