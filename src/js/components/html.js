import React from 'react';

export default class Html extends React.Component {
  render () {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />
          <title>React Boilerplate</title>

          <link rel="stylesheet" type="text/css" href="/assets/style.css"></link>

        </head>
        <body>
          <div 
            id="app"
            dangerouslySetInnerHTML={{__html: this.props.innerContent}}
          />

          <script type="text/jsx" src={this.props.jsFile}></script>
          {/*<script src={this.props.livereload}></script>*/}
        </body>
      </html>
    );
  }
}