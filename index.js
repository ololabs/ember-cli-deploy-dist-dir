var BasePlugin = require('ember-cli-deploy-plugin');
var glob = require('glob');

module.exports = {
  name: 'ember-cli-deploy-dist-dir',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      defaultConfig: {
        filePattern: '**/**/*',
        distDir: 'tmp/deploy-dist'
      },

      willBuild: function(context) {
        var distDir = this.readConfig('distDir');
        var filePattern = this.readConfig('filePattern');

        this.log('Setting dist files and directory');

        return {
          distDir: distDir,
          distFiles: glob.sync(filePattern, {
            nonull: false,
            nodir: true,
            cwd: distDir
          })
        };
      }
    });

    return new DeployPlugin();
  }
};
