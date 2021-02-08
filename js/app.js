const clear = document.querySelector(".delete");
const back = document.querySelector(".back");
const power = document.querySelector(".power");

var isOn = false;

const calculator = document.querySelector(".calculator");

const screen = document.querySelector(".off");
const textresult = document.querySelector(".screenNb");
const lastNb = document.querySelector(".lastNb");

const float = document.querySelector(".float");
const equal = document.querySelector(".equal");

const plusSign = document.querySelector(".addition");
const divisionSign = document.querySelector(".division");
const multiplicationSign = document.querySelector(".multiplication");
const substractionSign = document.querySelector(".substraction");
const moduloSign = document.querySelector(".modulo");
const sign = document.querySelectorAll(".sign:not(.equal,.float)");

const numbers = document.querySelectorAll('[data-nb]');

var firstNb = 0;
var secondNb = 0;
var result = 0;
var choosenSign = undefined;
var isResultDisplayed = 0;
var isFloatAlreadyHere = 0;

const switchCalculator = () => {
    power.addEventListener("click", () => {
        screen.classList.toggle("off");
        screen.classList.toggle("screen");
        isOn = !isOn;
        textresult.innerHTML = '';
        lastNb.innerHTML = '';
    });
};

const putNb = () => {
    numbers.forEach(Element => {
        Element.addEventListener('click', event => {
            if (isResultDisplayed === 1) {
                textresult.innerHTML = '';
                lastNb.innerHTML = '';
                isResultDisplayed = false;
            }
            textresult.innerHTML += Element.textContent;
        })
    });
};

const floatFunction = () => {
    float.addEventListener("click", () => {
        if (isFloatAlreadyHere === 0) {
            textresult.innerHTML += '.';
            isFloatAlreadyHere = 1;
        }
    });
};

const clearFunction = () => {
    clear.addEventListener("click", () => {
        textresult.innerHTML = '';
        lastNb.innerHTML = '';
    });
};

const backFunction = () => {
    back.addEventListener("click", () => {
        textresult.innerHTML = textresult.innerHTML.substring(0, textresult.innerHTML.length - 1)
    });
};

const handleOperator = () => {
    sign.forEach(Element => {
        Element.addEventListener('click', event => {
            choosenSign = Element.textContent;
            firstNb = parseFloat(textresult.textContent);
            lastNb.innerHTML = textresult.textContent + ' ' + Element.textContent;
            textresult.innerHTML = ''; 
            isFloatAlreadyHere = 0;
        })
    });
};

const handleEqual = () => {
    equal.addEventListener("click", () => {
        secondNb = parseFloat(textresult.textContent);
        lastNb.innerHTML = '';
        if (choosenSign == '+') {
            result = firstNb + secondNb;
            textresult.innerHTML = result;
        } else if (choosenSign == '-') {
            result = firstNb - secondNb;
            textresult.innerHTML = result;
        } else if (choosenSign == 'x') {
            result = firstNb * secondNb;
            textresult.innerHTML = result;
        } else if (choosenSign == '%') {
            result = firstNb % secondNb;
            textresult.innerHTML = result;
        } else if (choosenSign == '/') {
            result = firstNb / secondNb;
            textresult.innerHTML = result;
        }
        isResultDisplayed = 1;
        isFloatAlreadyHere = 0;
    });
};

handleEqual();
handleOperator();
switchCalculator();
putNb();
clearFunction();
floatFunction();
backFunction();