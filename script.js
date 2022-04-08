//EXERCICIO 1
function exe1(){
    var a = (document.querySelectorAll("input")[0]);
    var b = (document.querySelectorAll("input")[1]);
    var soma = parseInt(a.value) + parseInt(b.value);
    document.getElementById("resposta").innerHTML = "A soma dos numeros informados é igual a " + soma;
}

function exe2(parametro){
    document.body.style.backgroundColor = parametro;
}

function exe3(cor){
    document.body.style.backgroundColor = cor;
}

function exe4(){
    var select = document.getElementById("cor");
    var opcao = select.options[select.selectedIndex].value;
    document.body.style.backgroundColor = opcao;

    console.log(opcao)
}

function exe5(valor){
    if(valor == "none"){
        document.getElementById("paragrafo").style.display = valor;
        document.getElementById("ocultar").style.display = valor;
        document.getElementById("mostrar").style.display = "block";
    }else{
        document.getElementById("paragrafo").style.display = valor;
        document.getElementById("ocultar").style.display = valor;
        document.getElementById("mostrar").style.display = "none";
    }
}