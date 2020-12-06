let expr = "";

function initialize() {
    console.log("initialize");
    expr = "";
    const input = document.getElementById("input");
    console.log(input.innerText, "inner");
    input.value = "";
}

function getNum(id) {
    let input = document.getElementById("input");
    console.log(document.getElementById(id).innerText);
    expr = expr + document.getElementById(id).innerText;

    input.value =
        input.value + document.getElementById(id).innerText;
}

function getOperator(id) {
    let input = document.getElementById("input");
    console.log(id);
    expr = expr + document.getElementById(id).innerText;
    input.value =
        input.value + document.getElementById(id).innerText;
}

function answer() {
    console.log(expr);
    let value = eval(expr);
    const input = document.getElementById("input");
    input.value = value;
    expr = value;
}
initialize();