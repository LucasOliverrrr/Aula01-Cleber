alert("Seja Bem Vindo!") 

function calculadora(){
    var valor1 = parseInt(document.getElementById("ivalor1").value);
    var valo2 = parseInt(document.getElementById("ivalor2").value);

    var op = document.querySelector('input[name=calc]:checked').value;

    if(op == 'soma'){
        var resposta = valor1 + valor2
        alert("A soma é" + resposta);
}
    if(op == 'subtracao'){
    var resposta = valor1 - valor2
    alert("A Subtracao é" + resposta);
}