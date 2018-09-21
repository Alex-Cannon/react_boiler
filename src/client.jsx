import React from 'react';
import { hydrate } from 'react-dom';

import App from './components/app/app.jsx';

// Hydrates server-rendered markup.
hydrate(<App pathname={location.pathname} />, document.getElementById("app"));