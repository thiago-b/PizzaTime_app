// Parametros
// Quando a duração for menos de 3h
// Homens comem 4 pedaços, mulheres 3 pedaços e crianças 2 pedaços
// Se durar mais de 3h
// Homens comem 6 pedaços, mulheres 5 e crianças 4



    let inputHomens = document.getElementById("homens");
    let inputMulheres = document.getElementById("mulheres");
    let inputCriancas = document.getElementById("criancas");
    let inputDuracao = document.getElementById("duracao");

    let resultado = document.getElementById("resultado");

    function calcular(){
        console.log("Calculando...")
        let homens = inputHomens.value;
        let mulheres = inputMulheres.value;
        let criancas = inputCriancas.value;
        let duracao = inputDuracao.value;
        let adultos = parseInt(homens) + parseInt(mulheres);

        let qntdPedacos = homens * PedacosHomens(duracao) + mulheres * PedacosMulheres(duracao) + criancas * PedacosCriancas(duracao);
        let qntdRefri = adultos * refriPP(duracao) + (criancas * refriPP(duracao)/2);
        console.log(adultos)

        resultado.innerHTML = `<p>${Math.ceil(qntdPedacos / 8)} Pizzas grandes </p>`
        resultado.innerHTML += `<p>${Math.ceil(qntdRefri / 2000)} garrafas de refrigerante 2L </p>`
        
    }
    
    function PedacosHomens(duracao){
        if(duracao >= 3){
            return 6;
        }
        else{
            return 4;
        }
    }

    function PedacosMulheres(duracao){
        if(duracao >= 3){
            return 5;
        }
        else{
            return 3;
        }
    }

    function PedacosCriancas(duracao){
        if(duracao >= 3){
            return 4;
        }
        else{
            return 2;
        }
    }

    function refriPP(duracao){
        if(duracao >= 3){
            return 800;
        }
        else{
            return 600;
        }
    }

    