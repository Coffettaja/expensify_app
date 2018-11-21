import moment from 'moment'

export default [{
  id: '0',
  description: 'car',
  note: '',
  amount: 6000,
  createdAt: 0
},
{
  id: '1',
  description: 'Rent',
  note: '',
  amount: 16000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '2',
  description: 'rent',
  note: '',
  amount: 16000,
  createdAt: moment(0).add(4, 'days').valueOf()
},
{
  id: '3',
  description: 'water',
  note: '',
  amount: 1000,
  createdAt: moment(0).add(12, 'days').valueOf()
},
]