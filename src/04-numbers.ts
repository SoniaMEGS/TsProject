//Creas un funcion auto ejecutable para no tener problemas con asignacion de nombres de variables.

(() => {
  let productPrice = 100;
  productPrice = 10;
  console.log('productPrice', productPrice);

  let costumerAge: number = 29;
  costumerAge = costumerAge + 1;
  //costumerAge = costumerAge + '1'; //← sale una alerta de que no se puede sumar numero mas string
  console.log('costumerAge', costumerAge);

  let productInStock: number;
  //console.log('productInStock', productInStock); //Sale un error de que estamos usando la variable antes de asignarla

  let discout = parseInt('123');
  console.log('discout', discout);

  let hexadecimal = 0xfff;
  console.log('hexadecimal', hexadecimal);
  let bin = 0b1010; // 10
  console.log('bin', bin);

  const myNumber: number = 10;
})();
