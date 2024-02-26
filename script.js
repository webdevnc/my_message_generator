//Create three arrays of person, verb and place.

const randomPerson = ['You will', 'A pirate can', 'The principal will', 'Your mom will'];
const randomVerb = ["run to", "jump across", "fly to", "destroy"];
const randomPlace = ["your house.", "the train tracks!", "Walmart.", "McDonalds!"];

//Create variables to contain random phrases.
let selectedPerson;
let selectedVerb;
let selectedPlace;
let mixedMessage;

//Create a function to select random items from array
const randomPhrase = phraseArray => {
    //Generate a number from 0 to length of array
    const arrayIndex = Math.floor(Math.random()*phraseArray.length);
    //use random number as index of the phrase to return
    return phraseArray[arrayIndex];
}

selectedPerson = randomPhrase(randomPerson);
selectedVerb = randomPhrase(randomVerb);
selectedPlace = randomPhrase(randomPlace);

mixedMessage = selectedPerson + ' ' + selectedVerb + ' ' + selectedPlace;

console.log(mixedMessage);




//function randomMessage() {
  //  return getRandom((randomPerson) + " " + getRandom(randomVerb) + " " + getRandom(randomPlace) + " ")

//};
//let message = randomMessage;
//console.log(message);

//console.log(randomMessage());
