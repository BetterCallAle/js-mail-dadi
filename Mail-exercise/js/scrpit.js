const mailList = ["pippofranco@gmail.com", "gabibbotuttorosso@outlook.com", "divinootelma@boolean.it", "tedmosby@yahoo.com"];


//extract from DOM
const userMail = document.getElementById("user-email");

const submitBtn = document.getElementById("submit");

const cancelBtn = document.getElementById("cancel");

const sectionHeading = document.querySelector(".section-heading")


//on click export data
submitBtn.addEventListener("click", function() {
    //cleaning the sectionHeading
    sectionHeading.innerHTML = ""
    console.log(sectionHeading.innerHTML);

    const userMailValue = userMail.value;
    //Check if the user mail is in the mailList
    let registeredMail = false;

    for (i = 0; i < mailList.length; i++){
        let thisMail = mailList[i];

        if(userMailValue === thisMail){
            registeredMail = true;
        }
    }

    //create an element
    const elementCreated = document.createElement("h2");

    if(registeredMail){
        elementCreated.innerHTML = `Hai effettuato l'accesso con l'email: ${userMailValue}`
    } else {
        elementCreated.innerHTML = `La tua email ${userMailValue} non è registrata. Effettua l'iscrizione prima di continuare`
    }

    sectionHeading.append(elementCreated)

    //cleaning the data
    userMail.value = ""
})

//cancel button
cancelBtn.addEventListener("click", function(){
    userMail.value = ""
    sectionHeading.innerHTML = ""
})



