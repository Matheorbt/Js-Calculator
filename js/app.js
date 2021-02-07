const clear = document.querySelector(".delete");
const back = document.querySelector(".back");
const power = document.querySelector(".power");

var isOn = false;

const calculator = document.querySelector(".calculator");

const screen = document.querySelector(".off");
const textresult = document.querySelector(".screenNb");

const floatDot = document.querySelector(".float");
const equal = document.querySelector(".equal");

const plusSign = document.querySelector(".addition");
const divisionSign = document.querySelector(".division");
const multiplicationSign = document.querySelector(".multiplication");
const substractionSign = document.querySelector(".substraction");
const moduloSign = document.querySelector(".modulo");

const numbers = document.querySelectorAll('[data-nb]');

const switchCalculator = () => {
    power.addEventListener("click", () => {
        screen.classList.toggle("off");
        screen.classList.toggle("screen");
        isOn = !isOn;
        textresult.innerHTML = '';
    });
};

const putNb = () => {
    numbers.forEach(Element => {
        Element.addEventListener('click', event => {
            textresult.innerHTML += Element.textContent;
        })
    });
};

const addition = () => {
    plusSign.addEventListener("click", () => {
        fullKnowMore.classList.toggle("activeHiddenAbout");
    });
};

const substraction = () => {
    plusSign.addEventListener("click", () => {
        fullKnowMore.classList.toggle("activeHiddenAbout");
    });
};

const multiplication = () => {
    plusSign.addEventListener("click", () => {
        fullKnowMore.classList.toggle("activeHiddenAbout");
    });
};

const modulo = () => {
    plusSign.addEventListener("click", () => {
        fullKnowMore.classList.toggle("activeHiddenAbout");
    });
};

const division = () => {
    plusSign.addEventListener("click", () => {
        fullKnowMore.classList.toggle("activeHiddenAbout");
    });
};

const float = () => {
    plusSign.addEventListener("click", () => {
        fullKnowMore.classList.toggle("activeHiddenAbout");
    });
};

const clearFunction = () => {
    clear.addEventListener("click", () => {
        textresult.innerHTML = '';
    });
};

const backFunction = () => {
    back.addEventListener("click", () => {
        textresult.innerHTML = textresult.innerHTML.substring(0, textresult.innerHTML.length - 1)
    });
};

const getResult = () => {
    plusSign.addEventListener("click", () => {
        fullKnowMore.classList.toggle("activeHiddenAbout");
    });
};

switchCalculator();
putNb();
addition();
substraction();
clearFunction();
float();
division();
modulo();
multiplication();
backFunction();
getResult();