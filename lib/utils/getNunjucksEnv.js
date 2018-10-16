'use strict';

const nunjucks = require('nunjucks');

// Returns client Nunjucks environment (if passed in), or creates a new one.
module.exports = (name, env, warned) => {
  if (env.pixu && env.pixu.nunjucks && env.pixu.nunjucks.environment) {
    return env.pixu.nunjucks.environment;
  }
  if (!(env.pixu && env.pixu.nunjucks && env.pixu.nunjucks.templatepath)) {
    if (!warned) {
      env.logger.warn(`Must pass in a nunjucks.templatepath if using ${name}.`);
    }
    return null;
  }
  nunjucks.installJinjaCompat();
  return nunjucks.configure(env.pixu.nunjucks.templatepath);
};
