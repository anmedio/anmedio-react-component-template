import { configure } from '@storybook/html';

import '../dist/static/css/main.min.css';

const req = require.context('./stories', true, /\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
