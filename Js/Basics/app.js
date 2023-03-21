const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

//let maxAllowedChars = productNameInputElement.maxlength;

//console.dir(productNameInputElement);

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = 60 - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);


const spanElement = document.getElementById('remaining-chars');

spanElement.style.color = 'rgb(0, 150, 100)';