// compile server-side jsx
require("@babel/register");

if (process.env.NODE_ENV !== 'production') {
  process.env.WEBPACK = true;
}

require ('./src/server/server.js');