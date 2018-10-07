import React from 'react';
import { render } from 'react-dom';

import App from './components/app.js';

// Hydrates server-rendered markup.
render(<App pathname={location.pathname} />, document.getElementById("app"));
