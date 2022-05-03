function Suma()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    //Convertir a numeros num1 y num2
    let suma = Number(num1) + Number(num2);
    alert("la suma es: "+ suma);
}

function Resta()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resta = num1 - num2;
    alert("la Resta es: "+ resta);
}

function Multi()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let Multi = num1 * num2;
    alert("la Multiplicacion es: "+ Multi);
}

function Division()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let Divi = num1 / num2;
    alert("la Division es: "+ Divi);
}