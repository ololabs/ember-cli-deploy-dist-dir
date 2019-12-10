const assert = require('assert');

const stubProject = {
  name: function() {
    return "my-project";
  }
};

describe("dist-dir plugin", function() {
  let subject, mockUi;

  beforeEach(function() {
    subject = require("../index");
    mockUi = {
      verbose: true,
      messages: [],
      write: function() {},
      writeLine: function(message) {
        this.messages.push(message);
      }
    };
  });

  it("has a name", function() {
    var result = subject.createDeployPlugin({
      name: "test-plugin"
    });

    assert.equal(result.name, "test-plugin");
  });

  it("implements the correct hooks", function() {
    var plugin = subject.createDeployPlugin({
      name: "test-plugin"
    });
    assert.ok(plugin.willBuild);
  });

  it("sets the distDir correctly - default", function () {
    var plugin = subject.createDeployPlugin({
        name: 'dist-dir'
      });
      var context = {
        ui: mockUi,
        project: stubProject,
        config: {}
      };

      plugin.beforeHook(context);
      plugin.configure(context);
      plugin.willBuild(context);
      assert.equal(plugin.readConfig("distDir"), "tmp/deploy-dist");
  });

  it("sets the distDir correctly - config", function () {
    var plugin = subject.createDeployPlugin({
        name: 'dist-dir'
      });
      var context = {
        ui: mockUi,
        project: stubProject,
        config: {
            'dist-dir': {
                distDir: './dist'
            }
        }
      };

      plugin.beforeHook(context);
      plugin.configure(context);
      plugin.willBuild(context);
      assert.equal(plugin.readConfig("distDir"), "./dist");
  });
});