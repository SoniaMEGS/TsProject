import _ from 'lodash';

const data = [
  {
    userName: 'Sonia',
    role: 'admin',
  },
  {
    userName: 'Maria',
    role: 'seller',
  },
  {
    userName: 'Rodrigo',
    role: 'seller',
  },
  {
    userName: 'Zulema',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
