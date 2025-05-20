import morseCodeMap from "./morseData/morseCodeMap.js";

const textInputed = document.getElementById('inputText');
const textConverted = document.getElementById('convertedText');
const translateButton = document.getElementById("convertedButton");
const deletedButton = document.getElementById("clearButton");
const charCounter = document.getElementById('charCounter')



//Accesing the buttono to convert with a Event
translateButton.addEventListener("click", () => {
    //Accesing the entered text and converting it to upperCase
    const valor = textInputed.value.toUpperCase();
    //separating each character
    const separated = valor.split("")


    const textConver = separated.map( letter => {
        if(morseCodeMap[letter]){
            return morseCodeMap[letter]
        }else {
           return "?"
        }
    }).join('')

    textConverted.value = textConver
})

//Function to clear the textarea
function clearAction(){
    textConverted.value = ""
    textInputed.value = ""

    charCounter.innerText = `${textInputed.value.length} / 60`;
    charCounter.style.color = "white"
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
