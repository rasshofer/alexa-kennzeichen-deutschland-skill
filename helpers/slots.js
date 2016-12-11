const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const vendor = path.resolve(__dirname, '..', 'vendor');
const assets = path.resolve(__dirname, '..', 'assets');

const input = path.resolve(vendor, 'kennzeichen', 'de.yaml');
const output = path.resolve(assets, 'model', 'abbreviations.txt');

const list = yaml.safeLoad(fs.readFileSync(input, 'utf8'));

const abbreviations = Object.keys(list).map(item => item.replace(/./gu, match => `${match}. `).trim());

fs.writeFileSync(output, abbreviations.join('\n'));
