// import { H5P } from 'h5p-standalone'; // ES6
// const { H5P } = require('h5p-standalone');
// <script src="node_modules/h5p-standalone/dist/main.bundle.js"> // Globals
const { H5P } = 'H5PStandalone';

const el = document.getElementById('h5p-container');
const h5pLocation = './workspace';

const h5p = new H5P(el, h5pLocation);
