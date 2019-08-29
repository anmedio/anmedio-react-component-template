import React from 'react';
import { render } from 'react-dom';

import apiRouter from './apiRouter';

import FirstPage from '~/pages/FirstPage';
import SecondPage from '~/pages/SecondPage';

const components = [
  {
    component: <FirstPage routes={apiRouter.fakeData} />,
    target: document.getElementById('firstPage'),
  },
  {
    component: <SecondPage routes={apiRouter.fakeData} />,
    target: document.getElementById('secondPage'),
  },
];

$(() => {
  components.forEach(item => {
    if (item.target) render(item.component, item.target);
  });
});
