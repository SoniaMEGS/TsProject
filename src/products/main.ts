import { addProduct, calcStock, products } from './product.servic';

addProduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 6,
});

addProduct({
  title: 'Pro2',
  createdAt: new Date(1993, 2, 4),
  stock: 12,
  size: 'XL',
});
console.log(products);

const total = calcStock();
console.log(total);

//ejecutar en consola: node dist/products/main.js
