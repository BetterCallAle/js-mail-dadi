const mailList = ["pippofranco@gmail.com", "gabibbotuttorosso@outlook.com", "divinootelma@boolean.it", "tedmosby@yahoo.com"];
console.log(mailList);

//ask the user for his email
const userMail = prompt("Inserisci la tua mail");
console.log(userMail);

//Check if the user mail is in the mailList
let registeredMail = false;

for (i = 0; i < mailList.length; i++){
    let thisMail = mailList [i];
    console.log(thisMail);
}