/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      webpack: {
        module: {
          rules: [
            {
              test: /react-frontend\/.*\.tsx/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-react', { runtime: 'automatic' }],
                    '@babel/preset-typescript',
                  ],
                },
              },
            },
          ],
        },
      },
    },

    babel: {
      plugins: [
        // ... any other plugins
        require.resolve('ember-concurrency/async-arrow-task-transform'),

        // NOTE: put any code coverage plugins last, after the transform.
      ],
    },

    'ember-cli-babel': {
      includePolyfill: true,
    },

    'ember-cli-terser': {
      exclude: ['assets/ogv/**/*'],
    },

    sourcemaps: {
      enabled: true,
      extensions: ['js'],
    },

    sassOptions: {
      includePaths: ['app', 'node_modules/bootstrap/scss'],
    },

    fingerprint: {
      exclude: [
        'assets/images/layers-2x.png',
        'assets/images/layers.png',
        'assets/images/marker-icon-2x.png',
        'assets/images/marker-icon.png',
        'assets/images/marker-shadow.png',
        'assets/ogv/**/*',
      ],
    },
  });

  if (app.env === 'production') {
    app.options.inlineContent = {
      doorbell: 'app/doorbell.js',
      hotjar: 'app/hotjar.js',
    };
  }

  app.import('node_modules/@mapbox/leaflet-pip/leaflet-pip.js');

  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.js');
  app.import('node_modules/bootstrap/dist/css/bootstrap.css');

  app.import('node_modules/bootstrap-table/dist/bootstrap-table.js');
  app.import('node_modules/bootstrap-table/dist/bootstrap-table.css');

  app.import('node_modules/flatpickr/dist/flatpickr.css');

  app.import('node_modules/instantsearch.css/themes/satellite.css');

  app.import('node_modules/resonance-audio/build/resonance-audio.js');

  app.import('node_modules/mediaelement/build/mediaelement-and-player.js');
  app.import('node_modules/mediaelement/build/mediaelementplayer.css');
  app.import('node_modules/mediaelement/build/mejs-controls.svg', {
    destDir: 'assets/images',
  });

  app.import('node_modules/leaflet/dist/leaflet.css');
  app.import('node_modules/leaflet/dist/leaflet.js');
  app.import('node_modules/leaflet/dist/images/layers.png', {
    destDir: 'assets/images',
  });
  app.import('node_modules/leaflet/dist/images/layers-2x.png', {
    destDir: 'assets/images',
  });
  app.import('node_modules/leaflet/dist/images/marker-icon.png', {
    destDir: 'assets/images',
  });
  app.import('node_modules/leaflet/dist/images/marker-icon-2x.png', {
    destDir: 'assets/images',
  });
  app.import('node_modules/leaflet/dist/images/marker-shadow.png', {
    destDir: 'assets/images',
  });

  app.import('node_modules/leaflet-geosearch/assets/css/leaflet.css');
  app.import('node_modules/leaflet-geosearch/dist/bundle.min.js');
  app.import(
    'node_modules/leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant.js',
  );
  app.import('vendor/L.KML.js');
  app.import('vendor/leaflet-streetview/StreetViewButtons.js');

  app.import('node_modules/leaflet-draw/dist/leaflet.draw-src.css');
  app.import('node_modules/leaflet-draw/dist/leaflet.draw.js');
  app.import('node_modules/leaflet-draw/dist/images/spritesheet.png', {
    destDir: 'assets/images',
  });
  app.import('node_modules/leaflet-draw/dist/images/spritesheet-2x.png', {
    destDir: 'assets/images',
  });
  app.import('node_modules/leaflet-draw/dist/images/spritesheet.svg', {
    destDir: 'assets/images',
  });

  app.import('node_modules/leaflet.markercluster/dist/MarkerCluster.css');
  app.import(
    'node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css',
  );
  app.import(
    'node_modules/leaflet.markercluster/dist/leaflet.markercluster.js',
  );

  app.import(
    'node_modules/leaflet.awesome-markers/dist/leaflet.awesome-markers.js',
  );
  app.import(
    'node_modules/leaflet.awesome-markers/dist/leaflet.awesome-markers.css',
  );
  app.import(
    'node_modules/leaflet.awesome-markers/dist/images/markers-matte.png',
    { destDir: 'assets/images' },
  );
  app.import(
    'node_modules/leaflet.awesome-markers/dist/images/markers-matte@2x.png',
    { destDir: 'assets/images' },
  );
  app.import(
    'node_modules/leaflet.awesome-markers/dist/images/markers-plain.png',
    { destDir: 'assets/images' },
  );
  app.import(
    'node_modules/leaflet.awesome-markers/dist/images/markers-shadow.png',
    { destDir: 'assets/images' },
  );
  app.import(
    'node_modules/leaflet.awesome-markers/dist/images/markers-shadow@2x.png',
    { destDir: 'assets/images' },
  );
  app.import(
    'node_modules/leaflet.awesome-markers/dist/images/markers-soft.png',
    { destDir: 'assets/images' },
  );
  app.import(
    'node_modules/leaflet.awesome-markers/dist/images/markers-soft@2x.png',
    { destDir: 'assets/images' },
  );

  app.import('node_modules/interactjs/dist/interact.js');

  app.import('node_modules/video.js/dist/video.js');
  app.import('node_modules/video.js/dist/video-js.css');

  app.import('node_modules/ogv/dist/ogv-support.js');
  app.import('node_modules/ogv/dist/ogv.js');
  app.import('vendor/videojs-ogvjs.js');

  app.import('node_modules/wavesurfer.js/dist/wavesurfer.js');
  app.import('node_modules/wavesurfer.js/dist/plugin/wavesurfer.timeline.js');
  app.import('node_modules/videojs-wavesurfer/dist/videojs.wavesurfer.js');
  app.import('node_modules/videojs-wavesurfer/dist/css/videojs.wavesurfer.css');

  for (const component of [
    'main',
    'synaudio',
    'mediasource',
    'mpeg',
    'flac',
    'opus',
    'vorbis',
    'common',
  ]) {
    app.import(
      `node_modules/icecast-metadata-player/build/icecast-metadata-player-1.17.8.${component}.min.js`,
    );
  }

  const ogvAssets = new Funnel('node_modules/ogv/dist', {
    srcDir: '/',
    include: ['**/*.*'],
    destDir: 'assets/ogv',
  });

  return app.toTree([ogvAssets]);
};
