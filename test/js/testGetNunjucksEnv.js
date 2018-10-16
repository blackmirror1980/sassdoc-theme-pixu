'use strict';

const assert = require('assert');
const nunjucks = require('nunjucks');
const sinon = require('sinon');

const getNunjucksEnv = require('../../lib/utils/getNunjucksEnv');

describe('getNunjucksEnv', function() {
  it('uses an existing nunjucksEnv first', function() {
    const env = {
      pixu: {
        nunjucks: {
          environment: 'some value',
        },
      },
    };
    const actual = getNunjucksEnv(null, env, null);
    assert.equal(actual, 'some value');
  });

  it('returns null if env.pixu missing', function() {
    const env = {
      logger: {
        warn: sinon.fake(),
      },
    };
    const actual = getNunjucksEnv(null, env, null);
    assert.equal(actual, null);
    sinon.assert.calledOnce(env.logger.warn);
  });

  it('runs nunjucks.configure if all is good', function() {
    const configure = sinon.stub(nunjucks, 'configure');
    const env = {
      pixu: {
        nunjucks: {
          templatepath: 'some value',
        },
      },
    };
    // Look for side-effects:
    getNunjucksEnv(null, env, null);
    assert(configure.calledWith('some value'));
  });
});
