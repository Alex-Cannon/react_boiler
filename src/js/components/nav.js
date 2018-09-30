import React, {Component} from 'react';
import Link from '../objects/link';

class Index extends Component {
  render () {
    return (
      <nav>
        <Link href="/" children="Home"/>
        <Link href="/login" children="Login"/>
        <Link href="/signup" children="Signup"/>
        <div className="burger-container">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    );
  }
}

export default Index;