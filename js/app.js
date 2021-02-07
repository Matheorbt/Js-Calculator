const clear = document.querySelector(".delete");
const back = document.querySelector(".back");
const power = document.querySelector(".power");

let isOn = 0;

const calculator = document.querySelector(".calculator");

const screen = document.querySelector(".off");
const texresult = document.querySelector(".screenNb");

const floatDot = document.querySelector(".float");
const equal = document.querySelector(".equal");

const plusSign = document.querySelector(".addition");
const divisionSign = document.querySelector(".division");
const multiplicationSign = document.querySelector(".multiplication");
const substractionSign = document.querySelector(".substraction");
const moduloSign = document.querySelector(".modulo");

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

const switchCalculator = () => {
    power.addEventListener("click", () => {
        screen.classList.toggle("off");
        screen.classList.toggle("screen");
        isOn = 1;
    });
};

const putNb = () => {
    numbers.array.forEach(element => {
        console.log(element);
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
    plusSign.addEventListener("click", () => {
        fullKnowMore.classList.toggle("activeHiddenAbout");
    });
};

const backFunction = () => {
    plusSign.addEventListener("click", () => {
        fullKnowMore.classList.toggle("activeHiddenAbout");
    });
};

const getResult = () => {
    plusSign.addEventListener("click", () => {
        fullKnowMore.classList.toggle("activeHiddenAbout");
    });
};

const functionInvoc = () => {
    switchCalculator();
    if (isOn === 0) {
        numbers.onclick = function () {
            window.alert("You must turn on the calculator first !");
        }
    }
    else if (isOn === 1) {
        addition();
        substraction();
        clearFunction();
        float();
        division();
        modulo();
        multiplication();
        backFunction();
        getResult();
    }
};

functionInvoc();