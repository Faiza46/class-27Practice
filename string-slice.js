const mygoal = 'I am Here to Learn mern Stack Programing';

//split()
const myWord = mygoal.split(' ');
const myWord_1 = mygoal.split('a');

//slice
const myWord_3 = mygoal.slice(0, 9);
//substr
const myword_4 = mygoal.substr(5, 13);

//substring
const myword_5 = mygoal.substring(0, 9);

//concatenation

const firstWord = 'Faiza';
const secondWord = 'Huma';

const fullname = firstWord.concat(' ').concat(secondWord);

const player = ['david', 'dosany', 'pasha', 'don'];
const alljoined = player.join('www.');

console.log(alljoined);