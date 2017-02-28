// window env stuff first
import './utils/env/promise';
import './utils/env/fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
