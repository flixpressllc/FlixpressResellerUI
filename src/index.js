// window env stuff first
import './utils/env/promise';
import './utils/env/fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
