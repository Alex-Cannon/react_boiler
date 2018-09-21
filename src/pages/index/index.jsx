import React, {Component} from 'react';

import Link from '../../components/link/link.jsx';

export default class Index extends Component {
  render () {
    return (
      <div>
        I'm the index page!
        <Link href="/about" children={"About"}/>
      </div>
    );
  }
}