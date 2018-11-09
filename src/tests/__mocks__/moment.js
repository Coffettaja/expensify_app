// import moment from 'moment' would just import the mocked version, which would keep repeatedly calling itself. Instead the original moment library has to be imported with requireActual
const moment = require.requireActual('moment')


// important to have fixed default value for timestamp, so when moment() will always have the same value
// this has to be mocked because in the standard moment.js library moment() refers to current time, and as a result snapshot testing fails
export default (timestamp = 0) => {
  return moment(timestamp)
}

