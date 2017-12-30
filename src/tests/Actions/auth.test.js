import { login, logout } from '../../Actions/auth';

test('should generate login action obj', () => {
  const uid = 'P3N15';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
});

test('should genrate logout action obj ', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});