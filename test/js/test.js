'use strict';

const assert = require('assert');
const del = require('del');
const fs = require('fs');
const Promise = require('bluebird');

const pixu = require('../../');

const access = Promise.promisify(fs.access);

describe('pixu', function() {
  before(function() {
    this.dest = `${__dirname}/dest`;
  });

  afterEach(function() {
    del.sync(`${this.dest}/*`);
  });

  it('renders pixu', function(done) {
    pixu(this.dest, { data: [] })
      .then(() => access(`${this.dest}/index.html`))
      .then(() => {
        assert.ok(true);
        done();
      })
      .catch(done);
  });
});
