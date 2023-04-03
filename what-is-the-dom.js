// get references from HTML
const theMessage = document.querySelector('.theMessage');
const theBtn = document.querySelector('.theButton');
const theName = document.querySelector('.theName');
const theDate = document.querySelector('.theDate');

theBtn.addEventListener('click', () => {

    const userName = theName.value;
    const currentDate = theDate.value;

    const theColor = document.querySelector('.color:checked');
    alert(theColor.value);

    if(userName === "") {
        theMessage.innerHTML = "Please enter a name:";
    } else {
        let msg = `Hi, ${userName} you pressed the button`;
        
        if (currentDate !== "") {
            msg += ` on ${currentDate}`;
        }
        theMessage.innerHTML = msg;
    }

    // if(theMessage.innerHTML === "") {
    //     // innerHTML, HTML always has to be uppercase()
    //     theMessage.innerHTML = "You clicked on the button";
    // } else {
    //     theMessage.innerHTML = "";
    // }
})

