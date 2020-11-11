import {
  setUser, userLogout, setTeachers, setCurrentTeacher, getAppoinments,
  SET_USER, LOGOUT, SET_TEACHERS, SET_CURRENT_TEACHER, GET_APPOINMENTS,
} from '../actions';

describe('create actions', () => {
  it('create action to setUser', () => {
    const user = [];
    const resultAction = {
      type: SET_USER,
      user,
    };
    expect(setUser(user)).toEqual(resultAction);
  });

  it('create action to user logout', () => {
    const resultAction = {
      type: LOGOUT,
    };
    expect(userLogout()).toEqual(resultAction);
  });

  it('create action to set Teachers List', () => {
    const teachers = [];
    const resultAction = {
      type: SET_TEACHERS,
      teachers,
    };
    expect(setTeachers(teachers)).toEqual(resultAction);
  });

  it('create action to set current teacher', () => {
    const currentTeacher = [];
    const resultAction = {
      type: SET_CURRENT_TEACHER,
      currentTeacher,
    };
    expect(setCurrentTeacher(currentTeacher)).toEqual(resultAction);
  });

  it('create action to get an appoinments list', () => {
    const appoinments = [];
    const resultAction = {
      type: GET_APPOINMENTS,
      appoinments,
    };
    expect(getAppoinments(appoinments)).toEqual(resultAction);
  });
});
