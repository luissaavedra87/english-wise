import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import App from '../components/App';
import Nav from '../components/Nav';
import Home from '../components/Home';
import TeacherDetails from '../components/TeacherDetails';
import UserSchedule from '../components/userSchedule';

it('renders app', () => {
  const store = createStore(rootReducer);
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  expect(wrapper).toMatchSnapshot();
});

it('contains a Router', () => {
  const store = createStore(rootReducer);
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  expect(wrapper.find(Router)).not.toBe(undefined);
});

it('display nav component', () => {
  const store = createStore(rootReducer);
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  expect(wrapper.find(Nav)).not.toBe(undefined);
});

it('display Home component', () => {
  const store = createStore(rootReducer);
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  expect(wrapper.find(Home)).not.toBe(undefined);
});

it('display TeacherDeTails component', () => {
  const store = createStore(rootReducer);
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  expect(wrapper.find(TeacherDetails)).not.toBe(undefined);
});

it('display UserSchedule component', () => {
  const store = createStore(rootReducer);
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  expect(wrapper.find(UserSchedule)).not.toBe(undefined);
});
