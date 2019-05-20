var trezor = require('trezor.js')
var trezorLink = require('trezor-link')

import trezorConfig from "./config";

window.trezor = trezor;
window.trezorLink = trezorLink;
window.trezorConfig = trezorConfig;

export default {
    ...trezor,
    trezorConfig
};

