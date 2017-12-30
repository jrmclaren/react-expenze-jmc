import authReducer from '../../Reducers/auth';

test('should clear uid for logout ', () => {
  const uid = 'P3N15';
  const state = {
    auth: {
      uid
    }
  };
  const action = {
    type: 'LOGOUT'
  };
  const result = authReducer(state, action);
  expect(result).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'PEN15'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

