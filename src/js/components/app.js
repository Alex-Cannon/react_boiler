// Router file for React. Server & Client. :)
import React, {Component} from 'react';

// Pages
import Index from '../pages/index.js';
import Signup from '../pages/signup.js';
import Login from '../pages/login.js';

// Components
import Nav from './nav.js';

// Utils
import history from '../utils/lib/history.js';
import isOnClient from '../utils/lib/isOnClient';
// api

const ROUTES = {
  '/': Index,
  '/signup': Signup,
  '/login': Login
}

if (isOnClient) {
  require('../../sass/style.scss');
}

// Router for server & client
// req.url from server, location.pathname from client
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: this.props.pathname,
      user: undefined
    }
  }

  componentDidMount() {
    console.info('App loaded in:' + Math.round(performance.now()));

    history.onChange((pathname) => {
      this.setState({pathname});
    });
  }

  render () {
    const Handler = ROUTES[this.state.pathname] || Index;

    return (
      <div>
        <Nav/>
        <div className="content-wrapper">
          <Handler/>
        </div>
      </div>
    );
  }
}

export default App;