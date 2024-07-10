const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
};

// function clear
function clearDisplay() {
    display.value = '';
}

// function calculate
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (err) {
        display.value = 'error';
    }
}