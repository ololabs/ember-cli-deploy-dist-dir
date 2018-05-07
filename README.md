ember-cli-deploy-dist-dir
==============================================================================

This plugin is for setting distDir and distFiles context parameters when not using the ember-cli-deploy-build plugin. This allows you to utilize plugins that rely on ember-cli-deploy-build when you are building your app outside of the deploy pipeline.

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-deploy-dist-dir
```


Usage
------------------------------------------------------------------------------

Install this alongside ember-cli-deploy and you'll be able to use it.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
