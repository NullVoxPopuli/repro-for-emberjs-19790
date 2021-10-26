'use strict';

const { buildEmberPlugins } = require('ember-cli-babel');

module.exports = function (api) {
  api.cache(true);

  console.log('ugh'); // <-- I can see this in the terinal

  // return {}; // <-- I only added this because nothing I changed below seemed to affect the build output.
  // ^ I would expect this to break the build... or at the very least babel should complain about running in to decorators
  //   and not having the decorator plugin loaded...

  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          modules: 'auto',
          targets: {
            esmodules: false,
            browsers: ['last 1 firefox versions'],
          },
        },
      ],
    ],
    plugins: [
      // [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
      // ...buildEmberPlugins(__dirname),
    ],
  };
};
