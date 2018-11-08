import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header.jsx'

test('should render header correctly', () => {
  const renderer = new ReactShallowRenderer()
  renderer.render(<Header></Header>)
  expect(renderer.getRenderOutput()).toMatchSnapshot() 
})