let screen = document.getElementById('screen'); //get  access to the screeen id
buttons = document.querySelectorAll('button'); //select all the buttons
let screenValue = ''; //keeping screenvalue as zero
for (item of buttons) {
    item.addEventListener('click', (e) => { //add the click event to each of the buttons
        buttonText = e.target.innerText;    // buttonText now contains the inner text of each of the buttons when clicked

        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'Back'){
            screenValue = screen.value.slice(0,-1);
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
