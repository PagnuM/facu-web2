let n1,
  n2,
  op = "";

reset();

function concat(num) {
  if (op == "") {
    if (num == "." && n1.includes(".")) return;
    n1 += num;
    document.getElementById("visor").value += num;
  } else {
    if (num == "." && n2.includes(".")) return;
    n2 += num;
    document.getElementById("visor").value += num;
  }
}

function operation(operation) {
  if (op == "" && n1 != "") {
    op = operation;
    document.getElementById("visor").value += " " + op + " ";
  }
}

function equals() {
  if (n1 != "" && n2 != "") {
    let resultado;
    switch (op) {
      case "+":
        resultado = parseFloat(n1) + parseFloat(n2);
        break;

      case "-":
        resultado = parseFloat(n1) - parseFloat(n2);
        break;

      case "x":
        resultado = parseFloat(n1) * parseFloat(n2);
        break;

      case "/":
        resultado = parseFloat(n1) / parseFloat(n2);
        break;

      default:
        break;
    }
    reset();
    document.getElementById("visor").value = resultado;
  }
}

function reset() {
  op = n1 = n2 = "";
  document.getElementById("visor").value = "";
}
