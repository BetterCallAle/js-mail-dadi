const myNumber = Math.floor(Math.random() * (7 - 1) + 1);
const yourNumber = Math.floor(Math.random() * (7 - 1) + 1);
console.log(myNumber, yourNumber); 

if (yourNumber > myNumber){
   console.log("hai vinto tu");
} else if (yourNumber < myNumber){
   console.log("Ho vinto io");
} else if (yourNumber === myNumber){
   console.log("Abbiamo pareggiato");
} 


