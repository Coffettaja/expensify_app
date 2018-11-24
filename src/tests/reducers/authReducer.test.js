import authReducer from '../../reducers/authReducer'
import { login, logout } from '../../actions/auth'

test('should set an empty object as a default', () => {
  const state = authReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({})
})

test('should set uid for login', () => {
  const state = authReducer({}, login('uid'))
  expect(state.uid).toBe('uid')
})

test('should clear uid on logout', () => {
  const state = authReducer({uid: 'uid'}, logout())
  expect(state).toEqual({})
})