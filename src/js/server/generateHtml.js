import path from 'path';
import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import Html from '../components/html';
import App from '../components/App';

let jsFile = "";
let livereload = "";

if (process.env.NODE_ENV == 'production') {
  // Use compiled, minified index.html, bundle.js, & main.css files
  jsFile = '/assets/script.js';
} else {
  // Use "hot" files from webpackDevSerer
  jsFile = 'http://localhost:8081/dev-bundle.js';
  livereload = "http://localhost:35729/livereload.js";
}

function generateHtml(req, res) {
  console.log(req.originalUrl);

  const innerContent = renderToString(<App pathname={req.originalUrl}/>);

  // put .js, .css, and inner content here
  const html = renderToStaticMarkup(
    <Html
      innerContent={innerContent}
      jsFile={jsFile}
      livereload={livereload}
    />
  );

  res.send('<!DOCTYPE html>' + html);
}

export default generateHtml;