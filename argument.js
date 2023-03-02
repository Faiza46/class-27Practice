function allNumber(number1, number2, number3) {
    //return arguments;
    let total = 0
    for (const years of arguments) {
        //console.log(years);
        total = years + total;
    }
    return total;
}

const year = allNumber(8500, 2019, 1916, 4015, 3020, 2018, 2417);
console.log(year);


