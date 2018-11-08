import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header.jsx'

test('should render header correctly', () => {
  const wrapper = shallow(<Header></Header>)
  // toJSON library used to make sure the snapshot does not include all the unnceserray info from enzyme. it automatically runs because jest.config.json serializer property.
  expect(wrapper).toMatchSnapshot()
})