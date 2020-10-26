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
  deleteToken, validSession,
} from '../helpers/authHelper';

class App extends React.Component {
  componentDidMount() {
    const { user, setUser } = this.props;
    const loggedIn = validSession(user, setUser);
    if (!loggedIn);
  }

  setLogin = user => {
    const { setUser } = this.props;
    console.log(user.token);
    // setToken(user.token);
    setUser(user);
  }

  setLogout = () => {
    const { userLogout } = this.props;
    deleteToken();
    userLogout();
  }

  render() {
    const { user, setUser } = this.props;
    const loggedIn = validSession(user, setUser);

    const nUser = user.user;
    console.log(nUser);
    console.log(user);
    // console.log(nUser.username);
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
                <Nav username={user.username} logout={this.setLogout} />
                <FlashMessagesList />
                <Home username={user.username} />
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
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  // user: PropTypes.shape({
  //   username: PropTypes.string,
  // }).isRequired,
  userLogout: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
