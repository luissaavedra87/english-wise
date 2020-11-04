import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Home from './Home';
import Login from '../containers/Login';
import SignupPage from '../containers/Signup';
import TeachersList from '../containers/TeachersList';
import { setUser, userLogout } from '../actions/index';
import {
  deleteToken, validSession,
} from '../helpers/authHelper';
import TeacherDetails from './TeacherDetails';
import UserSchedule from './userSchedule';
import SideBar from './SideBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.openHandler = this.openHandler.bind(this);
  }

  componentDidMount() {
    const { user, setUser } = this.props;
    const loggedIn = validSession(user, setUser);
    if (!loggedIn);
  }

  setLogin = user => {
    const { setUser } = this.props;
    setUser(user);
  }

  setLogout = () => {
    const { userLogout } = this.props;
    deleteToken();
    userLogout();
  }

  openHandler = () => {
    const { sidebarOpen } = this.state;

    if (!sidebarOpen) {
      this.setState({
        sidebarOpen: true,
      });
    } else {
      this.setState({
        sidebarOpen: false,
      });
    }
  }

  handleClose = () => {
    this.setState({
      sidebarOpen: false,
    });
  }

  render() {
    const { user, setUser } = this.props;
    const loggedIn = validSession(user, setUser);
    const { sidebarOpen } = this.state;

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
              <div className="wrapper">
                <Nav
                  username={user.username}
                  logout={this.setLogout}
                  openHandler={this.openHandler}
                />
                {sidebarOpen ? <SideBar close={this.handleClose} sidebar="sidebar" /> : ''}
                <Home />
              </div>
            ) : <Redirect to="/login" />}
          </Route>
          <Route path="/teachers">
            { loggedIn ? (
              <div>
                <Nav
                  username={user.username}
                  logout={this.setLogout}
                  openHandler={this.openHandler}
                />
                {sidebarOpen ? <SideBar close={this.handleClose} sidebar="sidebar" /> : ''}
                <TeachersList />
              </div>
            ) : <Redirect to="/login" />}
          </Route>
          <Route path="/details/:id" component={TeacherDetails} />
          {/* <Route path="/details/:id">
            <Nav
              username={user.username}
              logout={this.setLogout}
              openHandler={this.openHandler}
            />
            {sidebarOpen ? <SideBar close={this.handleClose} sidebar="sidebar" /> : ''}
            <TeacherDetails />
          </Route> */}
          <Route path="/schedule">
            <Nav
              username={user.username}
              logout={this.setLogout}
              openHandler={this.openHandler}
            />
            {sidebarOpen ? <SideBar close={this.handleClose} sidebar="sidebar" /> : ''}
            <UserSchedule />
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
  userLogout: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
