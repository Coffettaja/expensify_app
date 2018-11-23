import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'
import { start } from 'repl';

test('should render header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }}></Header>)
  // toJSON library used to make sure the snapshot does not include all the unnceserray info from enzyme. it automatically runs because jest.config.json serializer property.
  expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
  const startLogout = jest.fn()
  const wrapper = shallow(<Header startLogout={startLogout}></Header>)
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled()
})