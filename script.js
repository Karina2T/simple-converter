import morseCodeMap from "./morseData/morseCodeMap.js";

const textInputed = document.getElementById('inputText');
const textConverted = document.getElementById('convertedText');
const translateButton = document.getElementById("convertedButton");
const deletedButton = document.getElementById("clearButton");
const charCounter = document.getElementById('charCounter')
const charConverted = document.getElementById('charConverted');
const title = document.querySelector('.mouseover');
const subtitle = document.querySelector('.titleMorse');


title.addEventListener('mouseover', () => {
    subtitle.style.display = 'block';
})
title.addEventListener('mouseleave', () => {
    subtitle.style.display = 'none';
})


//Accesing the buttono to convert with a Event
translateButton.addEventListener("click", () => {
    //Accesing the entered text and converting it to upperCase
    const valor = textInputed.value.toUpperCase();
    //separating each character
    const separated = valor.split("").map(letter => {
        if(letter === " "){
            return "/";
        }else if(morseCodeMap[letter]) {
            return morseCodeMap[letter];
        }else{
            return "?";
        }
    }).join(" ");

    textConverted.value = separated;

    const morseCharacters = textConverted.value.split("").filter(char => char === "." || char === "-").length;
    charConverted.innerText = `${morseCharacters} characters`;

})


//Function to clear the textarea
function clearAction(){
    textConverted.value = ""
    textInputed.value = ""
    charCounter.innerText = "0 / 60"
    charCounter.style.color = 'white'
}

deletedButton.addEventListener("click", clearAction )


//Changing the color depending on the charcters left
textInputed.addEventListener("input", () => {
    charCounter.innerText = `${textInputed.value.length} / 60`
    
    textInputed.value.length === 57 ? charCounter.style.color = "rgb(255, 255, 0)" 
    : textInputed.value.length === 58 ? charCounter.style.color = "rgb(255, 128, 0)" 
    : textInputed.value.length >= 59 ? charCounter.style.color = "rgb(255, 0, 0)" 
    : charCounter.style.color = 'white'
})

//Try the delete button, desapiring
