'use strict';

const nodeApi = require('..');
const assert = require('assert').strict;

assert.strictEqual(nodeApi(), 'Hello from nodeApi');
console.info('nodeApi tests passed');
