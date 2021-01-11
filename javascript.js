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
      break
    case "left-parenthesis":
      operation += "(";
      break
    case "right-parenthesis":
      operation += ")";
      break
    case "sqrt":
      operation += "Math.sqrt(";
      break
    case "pi":
      operation += "Math.PI";
      break
    case "dot":
      operation += ".";
      break
    case "sin":
      operation += "Math.sin("
      break
    case "cos":
      operation += "Math.cos("
      break
    case "tan":
      operation += "Math.tan("
      break
    case "delete":
      const tekst = operation.slice(0,operation.length-1);
      operation = tekst;
      break
    case "euler":
      operation += Math.E;
      break
    case "ce":
      erase();
      break
    case "result":
      result();
      break
  }
  console.log(operation);
});

function result() {
  const answer = eval(operation);
  console.log(answer);
  screenResult.innerHTML += `<p>${answer}</p>`;
  if (screenResult.lastChild.previousSibling){
    screenResult.lastChild.previousSibling.removeAttribute("id");
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