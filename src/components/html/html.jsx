import React from 'react';

const live_script = process.env.NODE_ENV !== 'production'? 
(<script src="http://localhost:35729/livereload.js"></script>):"";

export default class Html extends React.Component {
  render () {
    const styleString = this.props.styleString? (
      <style>{this.props.styleString}</style>
    ):null;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />

          <title>Voat Boat</title>

          {styleString}

        </head>
        <body>
          <div 
            id="app"
            dangerouslySetInnerHTML={{__html: this.props.innerContent}}
          />

          <script src={this.props.jsFile}/>
          {live_script}
        </body>
      </html>
    );
  }
}