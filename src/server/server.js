import path from 'path';
import express from 'express';
import generateHtml from './generateHtml';

const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('*', generateHtml);

app.listen(80, () => {
  console.log("App listening on port 80...");
});

if (process.env.NODE_ENV !== 'production') {
  require ('../../buildTools/dev.config');
}

export default app;