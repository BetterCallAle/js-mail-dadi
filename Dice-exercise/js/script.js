//created an empty array
const randomNumber = []
//run the random math twice and export it to the array

for(let i = 1; i <= 2; i++){
    const randomNumberGenerator = Math.floor(Math.random() * (7 - 1) + 1)
    randomNumber.push(randomNumberGenerator)
}

const  myNumber = randomNumber[0];
const userNumber = randomNumber[1];
console.log(myNumber, userNumber);

if(myNumber > userNumber){
    console.log("Ho vinto io");
} else if (myNumber < userNumber){
    console.log("Hai vinto tu");
} else if (myNumber === userNumber){
    console.log("Abbiamo pareggiato");
}