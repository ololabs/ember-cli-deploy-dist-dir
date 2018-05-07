'use strict';
const BasePlugin = require('ember-cli-deploy-plugin');
const glob = require('glob');

module.exports = {
  name: 'ember-cli-deploy-dist-dir',

  createDeployPlugin: function(options) {
    const DeployPlugin = BasePlugin.extend({
      name: options.name,

      defaultConfig: {
        filePattern: '**/**/*',
        distDir: 'tmp/deploy-dist',
      },

      willBuild: function(context) {
        const distDir = this.readConfig('distDir');
        const filePattern = this.readConfig('filePattern');

        this.log('Setting dist files and directory');

        return {
          distDir: distDir,
          distFiles: glob.sync(filePattern, {
            nonull: false,
            nodir: true,
            cwd: distDir,
          }),
        };
      },
    });

    return new DeployPlugin();
  },
};
