function sumCalculator(){
    const n1 = document.getElementById('num1').value ;
    const n2 = document.getElementById('num2').value ;
<<<<<<< HEAD
    const n3 = document.getElementById('num3').value ;

    const number1 = parseFloat(n1);
    const number2 = parseFloat(n2);
    const number3 = parseFloat(n3);

    const sum = number1 + number2 + number3;
=======

    const number1 = parseFloat(n1);
    const number2 = parseFloat(n2);

    const sum = number1 + number2;
>>>>>>> 68c20a488c4034ad01fba257bc3bee0c0c2cae89

    document.getElementById('res').textContent=sum;
}

<<<<<<< HEAD
function clearFields(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('num3').value="";
    document.getElementById('res').textContent="";
} 
=======
function eraser(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('res').textContent="";
}
>>>>>>> 68c20a488c4034ad01fba257bc3bee0c0c2cae89
