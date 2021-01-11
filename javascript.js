const container = document.getElementById("container");
const screenResult = document.getElementById("result-screen");
let operation = "";

container.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "zero":
      operation += "0";
      guide();
      break
    case "one":
      operation += "1";
      guide();
      break
    case "two":
      operation += "2";
      guide();
      break
    case "three":
      operation += "3";
      guide();
      break
    case "four":
      operation += "4";
      guide();
      break
    case "five":
      operation += "5";
      guide();
      break
    case "six":
      operation += "6";
      guide();
      break
    case "seven":
      operation += "7";
      guide();
      break
    case "eight":
      operation += "8";
      guide();
      break
    case "nine":
      operation += "9";
      guide();
      break
    case "plus":
      operation += "+";
      guide();
      break
    case "dash":
      operation += "-";
      guide();
      break
    case "x":
      operation += "*";
      guide();
      break
    case "slash":
      operation += "/";
      guide();
      break
    case "expo":
      operation += "**";
      guide();
      break
    case "left-parenthesis":
      operation += "(";
      guide();
      break
    case "right-parenthesis":
      operation += ")";
      guide();
      break
    case "sqrt":
      operation += "Math.sqrt(";
      guide();
      break
    case "pi":
      operation += "Math.PI";
      guide();
      break
    case "dot":
      operation += ".";
      guide();
      break
    case "sin":
      operation += "Math.sin(";
      guide();
      break
    case "cos":
      operation += "Math.cos(";
      guide();
      break
    case "tan":
      operation += "Math.tan(";
      guide();
      break
    case "euler":
      operation += Math.E;
      guide();
      break
    case "delete":
      const tekst = operation.slice(0,operation.length-1);
      operation = tekst;
      guide();
      break
    case "ce":
      erase();
      break
    case "result":
      result();
      break
  }
});

function result() {
  const answer = eval(operation);
  screenResult.innerHTML += `<p>${operation}</p>`;
  if (screenResult.lastChild.previousSibling){
    screenResult.lastChild.previousSibling.removeAttribute("id");
    screenResult.lastChild.previousSibling.innerHTML = `${operation} = <span>${answer}</span>`;
  }
  screenResult.lastChild.setAttribute("id", "last");
}

function erase() {
  operation = "";
  screenResult.innerText = "";
}

function guide() {
  screenResult.lastChild
  ? screenResult.lastChild.innerHTML = `${operation}`
  : screenResult.innerHTML = `<p>${operation}</p>`;
}