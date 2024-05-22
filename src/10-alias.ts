(() => {
  // definiendo un tipo
  // alias type

  type UserID = string | number | boolean;

  let userId: UserID;

  function greeting(parametro: UserID) {
    return typeof parametro === 'string'
      ? console.log(`string ${parametro.toLocaleLowerCase()}`)
      : null;
  }

  // Literal types
  type TSizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: TSizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = "s"; //// wrong

  function greet(parametro1: UserID, parametro2: TSizes) {
    return typeof parametro1 === 'number'
      ? console.log(`ID: ${parametro1}`, `tamaño: ${parametro2}`)
      : null;
  }
  greet('1', 'XL');
  greet('2', 'L');
})();
