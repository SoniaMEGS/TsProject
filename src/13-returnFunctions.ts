//En TS podemos especificar que tipo de dato retorna la función e incluso podemos indicar cuando esa funcion no retorna nada.
(() => {
  // Retornando un string
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  // Funcion sin retorno
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal([1, 2, 3, 5, 6]);
})();
