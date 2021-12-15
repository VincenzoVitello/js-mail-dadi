// esercizio delle mail
const correctMails = ["vincenzovitello0@gmail.com", "vincenzovitello1@gmail.com","vincenzovitello2@gmail.com","vincenzovitello3@gmail.com"];
let userMail = prompt("Per favore, inserisci ul tuo indirizzo mail.");
let actualMail = false;

for (let i = 0; i < correctMails.length; i++){
    if(userMail == correctMails[i]){
        actualMail = true;
        console.log("benvenuto!");
    }else{
        console.log("scusa, chi sei?");
    }
}
