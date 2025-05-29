import morseCodeMap from "./morseData/morseCodeMap.js";

const textInputed = document.getElementById('inputText');
const textConverted = document.getElementById('convertedText');
const translateButton = document.getElementById("convertedButton");
const deletedButton = document.getElementById("clearButton");
const charCounter = document.getElementById('charCounter')
const charConverted = document.getElementById('charConverted');
const title = document.querySelector('.mouseover');
const subtitle = document.querySelector('.titleMorse');


//Hide the subtitle initially
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



//Accesing the button to convert with a Event
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


//Function to clear the textarea and converted Area 
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

    //Validating the characters entered



     const validCharacters = textInputed.value

    if(validCharacters === ''){
         console.log('Please enter a character');
         return;
    } 

        const words = validCharacters.split("");
        let errorShow = false

         words.forEach(element => {
             console.log('Evaluando')

              if(!Object.prototype.hasOwnProperty.call(morseCodeMap, element.toUpperCase())) {
                if(!errorShow){
                    alert(`The character "${element}" is not valid`);
                    errorShow = true;
                }
             }
         })
     

})




