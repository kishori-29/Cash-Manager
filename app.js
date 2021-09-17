const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message")
const noOfNotes= document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,50,20,10,5,2,1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    message.style.display="none";              //to hide message 
    const amountToBeReturned= cashGiven.value- billAmount.value;
    if (billAmount.value>0){
        if (amountToBeReturned>0 || amountToBeReturned==0){
            
            calculateChange(amountToBeReturned);
        }else{
            showMessage("The cash atleast equals to the Bill Amount!!");
        }
    }else{
        showMessage("Invalid Bill Amount");
    }
    console.log("in event")
});

//function to return or give the amount that should be return
function calculateChange(amountToBeReturned){
    console.log("in calc function");
    //to check for all available notes
    for(let i=0;i<availableNotes.length;i++){

        //to find how many and which notes required 
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);

        //updating variable by finding amount left after calculating no. of notes required
        amountToBeReturned = amountToBeReturned% availableNotes[i];

        noOfNotes[i].innerText= numberOfNotes;   // updating no. of notes in table
    }
}

//function to show the erroe messages
function showMessage(message1){
    message.style.display = "block"; 
    console.log("in showmsg")        //to unhide message
    message.innerText=message1;
}