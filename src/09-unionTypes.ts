(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'asasa';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('Nicolas');
  greeting(12.1212121212);
})();

//Los union types son especialmente útiles cuando quieres definir tu propio tipo de dato, en ese caso acotas tu variable al tipo de dato personalizado y con union determinas qué valores quieres que tenga, tu variable no recibirá valores diferentes a lo que tú definas.
