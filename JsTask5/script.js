const generateBtn = document.getElementById('generateBtn');
const numInput = document.getElementById('numInput');
const div1 = document.getElementById('div1');
const inputFieldsContainer = document.getElementById('inputFieldsContainer');
const inputForm = document.getElementById('inputForm');
const secondContainer = document.getElementById('secondContainer');
const alertField = document.getElementById('alertField');
const alertBtn = document.getElementById('alertBtn');
let inputsArray = [];
generateBtn.addEventListener('click', function() {
    const numberOfFields = parseInt(numInput.value);
    inputFieldsContainer.innerHTML = '';
    inputsArray = [];
    if (numberOfFields > 0) {
        div1.style.display = 'block';
        for (let i = 1; i <= numberOfFields; i++) {
            const label = document.createElement('label');
            label.textContent = `Sentence ${i}: `;
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `sentence${i}`;
            input.placeholder = `Enter sentence ${i}`;
            inputFieldsContainer.appendChild(label);
            inputFieldsContainer.appendChild(input);
            inputFieldsContainer.appendChild(document.createElement('br'));
            inputsArray.push(input);
        }

        secondContainer.style.display = 'block';
    }
});
inputForm.addEventListener('submit', function(event) {
    event.preventDefault();
});

alertBtn.addEventListener('click', function() {
    const fieldNumber = parseInt(alertField.value);

    if (fieldNumber > 0 && fieldNumber <= inputsArray.length) {
        const inputContent = inputsArray[fieldNumber - 1].value;
        alert(`Content of sentence ${fieldNumber}: ${inputContent}`);
    } else {
        alert('Invalid field number!');
    }
});