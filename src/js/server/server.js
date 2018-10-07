const path = require('path');
const express = require('express');

// Initialize app
const app = express();

app.use('/static', express.static(path.join(__dirname, '../../../dist')));

// Allow App to handle views
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../../dist/index.html'));
});

// Serve on port 80
/*app.listen(80, () => {
  console.log("App listening on port 80...");
});*/

if (process.env.NODE_ENV !== 'production') {
  require('../../../buildTools/dev.config.js');
}

export default app;