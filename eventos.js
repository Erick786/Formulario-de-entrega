let cep = document.getElementById("cep");
let logradouro = document.getElementById("logradouro")
let numero = document.getElementById("numero")
let bairro = document.getElementById("bairro")
let cidade = document.getElementById("cidade")
let uf = document.getElementById("uf")

function obtemEndereco(){

    const CEP = cep.value;
    
    fetch (`https://viacep.com.br/ws/${CEP}/json/`)
    .then(Response => Response.json())
    .then(json => {
        logradouro.value = json.logradouro;
        bairro.value = json.bairro;
        cidade.value = json.localidade;
        uf.value = json.uf;
    }

    )

    }