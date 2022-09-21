function calculaImc() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  height = height / 100;

  let imc = weight / (height * height);
  document.getElementById("imc").innerHTML = imc.toFixed(2);

  if (imc < 18.5) {
    document.getElementById("condicao").innerHTML = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    document.getElementById("condicao").innerHTML = "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    document.getElementById("condicao").innerHTML = "Acima do peso(sobrepeso)";
  } else if (imc >= 30 && imc < 35) {
    document.getElementById("condicao").innerHTML = "Obesidade 1";
  } else if (imc >= 35 && imc < 40) {
    document.getElementById("condicao").innerHTML = "Obesidade 2";
  } else if (imc >= 40) {
    document.getElementById("condicao").innerHTML = "Obesidade 3";
  }
}
