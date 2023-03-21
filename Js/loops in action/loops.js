const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumbers = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumbers = sumUpToNumbers + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');
    outputResultElement.textContent = sumUpToNumbers;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);



const highlightLinkButtonElement = document.querySelector('#highlight-link button');

function highlightLinks() { 
    const anchorElements = document.querySelectorAll('#highlight-link a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}


highlightLinkButtonElement.addEventListener('click', highlightLinks)


const dumUserData = {
    firstName: 'Adewale',
    lastName: 'Arowolo',
    age: 22
}

const displayUserDataButtonElement = document.querySelector('#user-data button');


function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = '';

    for (const key in dumUserData) {
        const newUserDataListElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dumUserData[key];
        newUserDataListElement.textContent = outputText;
        outputDataElement.append(newUserDataListElement);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);


const rollsDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() { 
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
   
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
       // if (rolledNumber == enteredNumber) {
         //   hasRolledTargetNumber = true; 
        //}
        numberOfRolls++;
        const newRollListElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}   


rollsDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);