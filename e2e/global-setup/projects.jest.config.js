/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');

module.exports = {
  globalSetup: '<rootDir>/setup.js',
  projects: [
    {
      displayName: 'project-1',
      globalSetup: '<rootDir>/setup.js',
      rootDir: path.resolve(__dirname, './project-1'),
      testMatch: ['<rootDir>/**/*.test.js'],
    },
    {
      displayName: 'project-2',
      globalSetup: '<rootDir>/setup.js',
      rootDir: path.resolve(__dirname, './project-2'),
      testMatch: ['<rootDir>/**/*.test.js'],
    },
  ],
};
