function megaName(player) {
    // if (Array.isArray(player) == false) {
    //     console.log('Please Provide an Array');
    // }

    let mega = [];

    for (const players of player) {
        if (players.length > mega.length) {
            mega = players
        }
    }

    return mega;

}

const player = ['david', 'osany', 'pasha', 'von'];
const output = megaName(player);

console.log(output);


if (!player.includes('Messy')) {
    console.log("Player missing");
}
else {
    console.log("Player Found");
}

const year = [2019, 2016, 2015, 2020, 2018, 2017]
const month = [1, 7, 3, 6, 2, 12, 4];

const birthDay = year.concat(month);
const yearSlice = year.slice(-4, -2);

const monthSlice = month.slice(3, 6);


console.log(monthSlice);
