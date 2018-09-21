// Router file for React. Server & Client. :)
import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import ReactDOM from 'react-dom';

// Pages
import Index from '../../pages/index/index.jsx';
import About from '../../pages/about/about.jsx';

// Utils
import history from '../../utils/lib/history.js';

if (process.env.WEBPACK) {
  //require('./app.scss');
}

const ROUTES = {
  '/': Index,
  '/about': About
}

// Router for server & client
// req.url from server, location.pathname from client
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: this.props.pathname
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
        <nav>Navigation</nav>
        <Handler/>
      </div>
    );
  }
}

export default hot(module)(App);