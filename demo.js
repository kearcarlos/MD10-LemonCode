//hasId

console.log('===== hasID =====');
const userObject = {
    id: 1,
    name: 'Carlos',
}

const hasID = ({
    id: objectID
}) => objectID ? console.log(true) : console.log(false);

hasID(userObject);

//head

console.log('===== head =====');

const listaCiudades = ['Barcelona', 'Tarragona', 'Girona', 'Lleida'];

const head = ([first]) => first;
console.log(head(listaCiudades));

//tail

console.log('===== tail =====');

const arrayTailOriginal = ['Ordenador', 'Teléfono', 'Impresora'];
const arrayTailCopy = ([, ...array]) => array;

console.log(arrayTailCopy(arrayTailOriginal));

//swapFirstToLast

console.log('===== swapFirstToLast =====');

const arraySwap = ['Libro', 'Enciclopedia', 'Tesis'];
const swapFirstToLast = ([firstItem, ...array]) => [...array, firstItem];

console.log(swapFirstToLast(arraySwap));


//excludeId

console.log('===== excludeId =====');

const excludeObject = {
    id: 125,
    name: 'Carmen'
}

const excludeId = ({
    id,
    ...object
}) => object

console.log(excludeId(excludeObject));


//wordsStartingWithA

console.log('===== wordsStartingWithA =====');

const arrayA = ['alabanza', 'pelota', 'ratón', 'alma', 'ordenador', 'árbitro'];

const wordsStartingWithA = array => array.filter(array => array.startsWith('a') || array.startsWith('á') === true);

console.log(wordsStartingWithA(arrayA));

//concat

console.log('===== concat =====');

const concat = (...string) => string.join(" / ");

console.log(concat("hola", "esto", "son", "varios", "argumentos", "unidos"));

//multArray

console.log('===== multArray =====');

const arrayNumber = [4, 2, 10, 5];

const multArray = (arr, x) => arr.map( arrElement => arrElement * x )


console.log(multArray(arrayNumber, 8));


//calcMult

console.log('===== calcMult =====');

const calcMult = (...numbers) => numbers.reduce((accum, val) => accum * val, 1);

console.log(calcMult(2, 4, 5, 10, 22));