/*
set an Array of 5 of the 10 team logos selected randomly

duplicate that Array

inject both Arrays to the section ID's

first click, flip any one ID

second click check if assigned team logo matches first ID
    if(yes && all cards flipped){
        alert (Nice! reset?)
    } else if (yes) {
        leave card flipped
    } else {
        flip cards back over
    }

*/

const cards = document.querySelectorAll('section')

//add mlb class to cards
cards.forEach((x) => x.classList.add('mlb'))

//create the first array
let cardArray = []

//Get 5 random numbers between 0-9 number

// while(cardArray.length<5){
//     let randomSort = Math.floor(Math.random() * 10);
//     if(cardArray.indexOf(randomSort) === -1) cardArray.push(randomSort);
// }
//add '.card' to the random number
cardArray = cardArray.map(i => 'card' + i)
//make a duplicate array
let cardArray2 = cardArray
console.log(cardArray)

