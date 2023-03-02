const phone =
    ['iPhone 12 proMax',
        'Redmi node 11 pro',
        'Galaxy A33 ',
        'OnePlus 11',
        'Nokia G22']

const myKey = 'pro';

const myWord = 'Redmi';

const output = [];

/*for (const phones of phone) {
    //console.log(phones);

    if (phones.toLowerCase().indexOf(myKey.toLowerCase()) != -1) {
        output.push(phones);

    }
}*/

/*for (const phones of phone) {
    if (phones.toLowerCase().includes(myKey.toLowerCase())) {
        output.push(phones);

    }
}*/

/*for (const phones of phone) {
    if (phones.toLowerCase().endsWith(myKey.toLowerCase())) {
        output.push(phones);

    }
}*/

for (const phones of phone) {
    if (phones.toLowerCase().startsWith(myWord.toLowerCase())) {
        output.push(phones);

    }
}
console.log(output);