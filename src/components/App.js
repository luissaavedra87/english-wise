import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import FlashMessagesList from '../containers/FlashMessagesList';
import Home from './Home';
import Login from '../containers/Login';
import SignupPage from '../containers/Signup';
import { setUser, userLogout } from '../actions/index';
import {
  deleteToken, setToken, validSession,
} from '../helpers/authHelper';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loggedIn: false,
  //     user: {},
  //   };

  //   this.setLogin = this.setLogin.bind(this);
  //   this.setLogout = this.setLogout.bind(this);
  // }

  componentDidMount() {
    const { user, setUser } = this.props;
    const loggedIn = validSession(user, setUser);
    if (!loggedIn) return;

    // this.setState({
    //   loggedIn: validSession(user, setUser),
    // });
  }

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
    const { setUser } = this.props;
    // setToken(user.token);
    setUser(user);
    console.log(user);
  }

  setLogout = () => {
    const { userLogout } = this.props;
    deleteToken();
    userLogout();
  }

  render() {
    const { user, setUser } = this.props;
    const loggedIn = validSession(user, setUser);
    console.log(user);
    return (
      <Router>
        <Switch>
          <Route path="/login">
            { loggedIn ? <Redirect to="/" /> : <Login setUser={this.setLogin} />}
          </Route>
          <Route path="/signup">
            { loggedIn ? <Redirect to="/" /> : <SignupPage />}
          </Route>
          <Route exact path="/">
            { loggedIn ? (
              <div>
                <Nav userName={user.username} logout={this.setLogout} />
                <FlashMessagesList />
                <Home userName={user.username} />
              </div>
            ) : <Redirect to="/login" />}
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
  setUser: user => {
    dispatch(setUser(user));
  },
  userLogout: () => {
    dispatch(userLogout());
  },
});

App.propTypes = {
  // user: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
  userLogout: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
