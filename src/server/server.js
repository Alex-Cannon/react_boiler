import path from 'path';
import express from 'express';
import generateHtml from './generateHtml';

const app = express();

app.get('*', generateHtml);

app.listen(80, () => {
  console.log("App listening on port 80...");
})

if (process.env.NODE_ENV !== 'production') {
  // Run dev server for hot files
  require('../../buildTools/webpackDevServer');
}