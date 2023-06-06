// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//Prueba uno
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
 //Prueba 2
test("One dollar should be 106.58 yen", function(){
    const { fromDollarToYen } = require ('./app.js') 
    expect (fromDollarToYen(3.5)).toBe(373.03);
})

test("One Yen should be 0.0063 Pound", function(){
    const  { fromYenToPound } = require('./app.js')
    expect ( fromYenToPound (3.5)).toBe (0.02205);
})
