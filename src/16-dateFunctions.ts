import { subDays, format } from 'date-fns';

const date = new Date(1998, 9, 31); // 0=Enero, 1=Febrero, ... , 11=Diciembre
const res = subDays(date, 30);
const str = format(res, 'yyyy/MM/dd');
console.log(str);
