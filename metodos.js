const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

//metodo split -->> divide a string em uma cadeia de arrays





//metodo trim  -->> remove os espaços na string


const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

String.prototype.trimStart()
String.prototype.trimEnd()




//metodo includes -->> verifica se a cadeia de caracteres existe ou não ná string
// includes -->> case sensitive

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'breno';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
