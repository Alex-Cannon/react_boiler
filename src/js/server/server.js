import path from 'path';
import express from 'express';
import generateHtml from './generateHtml';

// Initialize app
const app = express();
app.use('/assets', express.static(path.join(__dirname, '../../../dist')));

// Allow App to handle views
app.get('*', generateHtml);

// Serve on port 80
app.listen(80, () => {
  console.log("App listening on port 80...");
});

export default app;