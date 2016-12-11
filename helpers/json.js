const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const vendor = path.resolve(__dirname, '..', 'vendor');
const lambda = path.resolve(__dirname, '..', 'lambda');

const input = path.resolve(vendor, 'kennzeichen', 'de.yaml');
const output = path.resolve(lambda, 'list.json');

const list = yaml.safeLoad(fs.readFileSync(input, 'utf8'));

fs.writeFileSync(output, JSON.stringify(list, null, 2));
