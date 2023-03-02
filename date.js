const myFavDate = new Date('2022-12-30');
//console.log(myFavDate);
//console.log(myFavDate.getDate());
console.log(myFavDate.getDay());

const anotherDate = new Date(1996, 6, 17, 00, 00, 00, 00);
//console.log(anotherDate);
//console.log(anotherDate.getDate());
console.log(anotherDate.getDay());

/*if (myFavDate.getTime() < anotherDate.getTime()) {
    console.log("my favourite time  is earlier");
}
else if (myFavDate.getTime() > anotherDate.getTime()) {
    console.log("Another time  is earlier");

}*/

/*if (myFavDate.getDate() < anotherDate.getDate()) {
    console.log("my favourite date is earlier");
}
else if (myFavDate.getDate() > anotherDate.getDate()) {
    console.log("Another date is earlier");

}*/

if (myFavDate.getDay() < anotherDate.getDay()) {
    console.log("my favourite day is earlier");
}
else if (myFavDate.getDay() > anotherDate.getDay()) {
    console.log("Anothere day is earlier");

}
