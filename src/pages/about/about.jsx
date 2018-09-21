import React, {Component} from 'react';

import Link from '../../components/link/link.jsx';

export default class Index extends Component {
  render () {
    return (
      <div>
        I'm the about page!
        <Link href="/" children={"index"}/>
      </div>
    );
  }
}