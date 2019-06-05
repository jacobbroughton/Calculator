let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let numberButtons = document.getElementsByClassName("numButtonText")
let containerDiv = document.getElementsByClassName("container");
let operationSet = false;
let firstSubjectArr = [];
let firstSubject;
let secondSubjectArr = [];
let operatorInUseStr;
let firstSubjectStr;
let secondSubjectStr;
let answerStr;
let operatorInUse;
let secondSubject;
let multiplyButton;
let subtractButton;
let divideButton;
let previousButton;
let previousEquation;
let previousEquationArray = [];
let previousDisplay;
let previousText;
let previousExit;
let previousBool = false;
let addButton;
let answer;
let equalBool = false;

// Gives value to number buttons
giveNumberButtonsValue = () => {
    let i;
    for (i = 0; i < numberButtons.length; i++) {
        numberButtons[i].innerHTML = numberArray[i];
        numberButtons[i].setAttribute("id", numberArray[i])
    }
}
giveNumberButtonsValue();


display = () => {
    previousDisplay = document.getElementById("pastWindow");
    previousExit = document.getElementById("pastExit");
    previousText = document.getElementById("pastText");

    if (previousBool === false) {
        displayDiv = document.getElementById("display");

        previousDisplay.style.visibility = "hidden";
        previousExit.style.visibility = "hidden";
        // previousText.innerHTML -= previousEquationArray;

        if (firstSubject === undefined) {
            displayDiv.innerHTML = "";
        } else if (firstSubject !== undefined && operatorInUse === undefined && secondSubject === undefined && answer === undefined) {
            displayDiv.innerHTML = firstSubject;
        } else if (firstSubject !== undefined && operatorInUse !== undefined && secondSubject === undefined && answer === undefined) {
            displayDiv.innerHTML = firstSubject + " " + operatorInUse;
        } else if (firstSubject !== undefined && operatorInUse !== undefined && secondSubject !== undefined && answer === undefined) {
            displayDiv.innerHTML = firstSubject + " " + operatorInUse + " " + secondSubject;
        } else if (firstSubject !== undefined && operatorInUse !== undefined && secondSubject !== undefined && answer !== undefined && equalBool === true) {
            displayDiv.innerHTML = firstSubject + " " + operatorInUse + " " + secondSubject + " = " + answer;
        }
    } else {
        previousDisplay.style.visibility = "visible";
        previousExit.style.visibility = "visible";
        previousText.innerHTML += previousEquationArray.join(" ");
    }

}


numberButtonClickFunctionality = () => {
    let i;
    for (i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener("click", function (event) {
            numButtonValue = event.target.id;
            if (operationSet === false) {
                firstSubjectArr.push(numButtonValue);
                firstSubjectStr = firstSubjectArr.join("");
                firstSubject = parseInt(firstSubjectStr);
                display();
                return firstSubject;
            } else {
                secondSubjectArr.push(numButtonValue);
                secondSubjectStr = secondSubjectArr.join("");
                secondSubject = parseInt(secondSubjectStr);
                display();
                return secondSubject;
            }
        }
        )
    }
}
numberButtonClickFunctionality();



// Multiply Functionality
multiply = () => {
    multiplyButton = document.getElementById("multiply");
    multiplyButton.addEventListener("click", function (event) {
        operatorInUse = "x"
        operationSet = true;
        display();
        return operatorInUse;
    })
}
multiply();

past = () => {
    previousButton = document.getElementById("previousButton");
    previousButton.addEventListener("click", function () {
        previousBool = true;
        previousText.innerHTML = "";
        display();
    })
}
past();

exitPast = () => {
    exitButton = document.getElementById("x");
    exitButton.addEventListener("click", function () {
        previousBool = false;
        display();
    })
}
exitPast();

// Subtract Functionality
subtract = () => {
    subtractButton = document.getElementById("subtract");
    subtractButton.addEventListener("click", function (event) {
        operatorInUse = "-"
        operationSet = true;
        display();
        return operatorInUse;
    })
}
subtract();



// Add Functionality
add = () => {
    addButton = document.getElementById("add");
    addButton.addEventListener("click", function (event) {
        operatorInUse = "+"
        operationSet = true;
        display();
        return operatorInUse;
    })
}
add();



// Divide Functionality
divide = () => {
    divideButton = document.getElementById("divide");
    divideButton.addEventListener("click", function (event) {
        operatorInUse = "/"
        operationSet = true;
        display();
        return operatorInUse;
    })
}
divide();



clear = () => {
    clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function () {
        firstSubjectArr = [];
        secondSubjectArr = [];
        firstSubject = undefined;
        secondSubject = undefined;
        operatorInUse = undefined;
        answer = undefined;
        equalBool = false;
        display();
        return firstSubjectArr, secondSubjectArr, equalBool, firstSubject, secondSubject, answer, operatorInUse;
    })
}
clear();



// Equals Functionality
equals = () => {
    equalsButton = document.getElementById("equals");
    equalsButton.addEventListener("click", function () {

        if (operatorInUse === "+") {
            answer = firstSubject + secondSubject;
        } else if (operatorInUse === "-") {
            answer = firstSubject - secondSubject;
        } else if (operatorInUse === "x") {
            answer = firstSubject * secondSubject;
        } else if (operatorInUse === "/") {
            answer = firstSubject / secondSubject
        };
        operationSet = false;
        equalBool = true;

        if (answer != undefined) {
            previousEquation = firstSubject + " " + operatorInUse + " " + secondSubject + " = " + answer;
            previousEquationArray.push(previousEquation + "<br>");
        }
        display();
        return answer;
    })
}
equals();


