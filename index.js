// compile server-side jsx
require("@babel/register");

if(process.env.NODE_ENV === 'production') {
  const compiler = require ('./buildTools/build.config.js');
  compiler.run((err, stats) => {
    if (err) return console.error(err);
    console.log("WEBPACK: Bundle OK.");

    require('./src/js/server/server.js');
  })
} else {
  require ('./src/js/server/server.js');
  require ('./buildTools/dev.config.js');
}

