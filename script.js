import morseCodeMap from "./morseData/morseCodeMap.js";

const textInputed = document.getElementById('inputText');
const textConverted = document.getElementById('convertedText');
const translateButton = document.getElementById("convertedButton");
const deletedButton = document.getElementById("clearButton");
const charCounter = document.getElementById('charCounter')
const charConverted = document.getElementById('charConverted');
const title = document.querySelector('.mouseover');
const subtitle = document.querySelector('.titleMorse');

let fixedTitle = false;

title.addEventListener('mouseover', () => {
    subtitle.textContent = "-.-. --- -. ...- . .-. - / -.-. .... .- .-. .- -.-. - . .-. ... / - --- / -- --- .-. ... . / -.-. --- -.. .";
})

title.addEventListener('mouseleave', () => {
    if(!fixedTitle){
        subtitle.textContent = "";
    }
});

title.addEventListener('click', () => {
    fixedTitle = !fixedTitle;
})



// title.addEventListener('click', () => {
//     console.log('Title clicked')
//     subtitle.style.display = 'block';
// })

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
    charCounter.innerText = "0 / 150"
    charCounter.style.color = 'white'
    charConverted.innerText = "0 characters";
}

deletedButton.addEventListener("click", clearAction )


//Changing the color depending on the charcters left
textInputed.addEventListener("input", () => {
    charCounter.innerText = `${textInputed.value.length} / 150`

    
    textInputed.value.length === 147 ? charCounter.style.color = "rgb(255, 255, 0)" 
    : textInputed.value.length === 148 ? charCounter.style.color = "rgb(255, 128, 0)" 
    : textInputed.value.length >= 149 ? charCounter.style.color = "rgb(255, 0, 0)" 
    : charCounter.style.color = 'white'
})

const inputedText = textInputed.value;

inputedText.split('').forEach((character) => {
    morseCodeMap.has(character)
})