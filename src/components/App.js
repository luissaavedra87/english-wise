import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Home from './Home';
import Login from '../containers/Login';
import SignupPage from '../containers/Signup';
import { userLogin, userLogout } from '../actions/index';
import {
  deleteToken, setToken, validSession,
} from '../helpers/authHelper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: {},
    };

    this.setLogin = this.setLogin.bind(this);
    this.setLogout = this.setLogout.bind(this);
  }

  // componentDidMount() {
  //   const { user, userLogin } = this.props;
  //   const loggedIn = validSession(user, userLogin);
  //   if (!loggedIn) return;

  //   this.setState({
  //     loggedIn: validSession(user, userLogin),
  //   });
  // }

  // const [user, setUser] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   async function loadUser() {
  //     if (!getToken()) {
  //       setLoggedIn(false);
  //     }
  //     try {
  //       const { data: user } = await fetch('')
  //     } catch (e) {
  //       return {
  //         error: e.message,
  //       };
  //     }
  //   }

  //   loadUser();
  // }, []);

  setLogin = user => {
    // const { userLogin } = this.props;
    setToken(user.token);
    this.setState({
      loggedIn: true,
      user: user.user,
    });
    // userLogin(user);
  }

  setLogout = () => {
    // const { userLogout } = this.props;
    deleteToken();
    this.setState({
      loggedIn: false,
      user: {},
    });
    // userLogout();
  }

  render() {
    const { user, loggedIn } = this.props;
    // const loggedIn = this.props;

    return (
      <Router>
        <Nav user={user} loggedIn={loggedIn} logout={this.setLogout} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                user={user}
              />
            )}
            // user={user}
            // component={Home}
          />
          {/* <Route path="/login" userLogin={this.setLogin} component={Login} /> */}
          <Route path="/login">
            <Login userLogin={this.setLogin} />
          </Route>
          {/* <Route path="/signup" userLogin={this.setLogin} component={Signup} /> */}
          <Route path="/signup">
            <SignupPage userLogin={this.setLogin} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setLogin: user => {
    dispatch(userLogin(user));
  },
  setLogout: () => {
    dispatch(userLogout());
  },
});

App.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  setLogin: PropTypes.func.isRequired,
  setLogout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
