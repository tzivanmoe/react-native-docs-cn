require('source-map-support/register')

global.__DEV__ = true;
global.__CLIENT__ = false;
global.__SERVER__ = true;
const server = require('universal-webpack').server;
const settings = require('../webpack/universal-webpack-settings');
const configuration = require('../webpack/webpack.config');

server(configuration, settings);
