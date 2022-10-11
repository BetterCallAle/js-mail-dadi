//created an empty array
const randomNumber = []

//run the random math twice and export it to the array
for(i = 1; i <= 2; i++){
    const randomNumberGenerator = Math.floor(Math.random() * (7 - 1) + 1)
    randomNumber.push(randomNumberGenerator)
}

const myNumber = randomNumber[0];
const userNumber = randomNumber[1];

console.log(myNumber, userNumber);