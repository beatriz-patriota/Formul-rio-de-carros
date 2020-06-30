var ArrPessoas = []
function Adicionar (){
    var Pessoa = {
        Nome: document.getElementById("nome").value,
        Telefone: document.getElementById("numero").value,
        ArrCarros: [],
        id:0

    }
    document.getElementById("nome").value = ""
    document.getElementById ("numero").value = ""
    ArrPessoas.push(Pessoa)    
    var id = 0
    ArrPessoas.forEach(function(item){
    id ++
    });
    Pessoa.id = id;
    var mostrar = document.getElementById("select")
    mostrar.innerHTML += `<option value="${Pessoa.id}">${Pessoa.Nome}</option>`
    
}

function Inserir (){
    var PessoaSelecionada = document.getElementById("select").value
    var Carros = {
        Marca: document.getElementById ("marca").value,
        Ano: document.getElementById("ano").value,
        Valor: document.getElementById("valor").value
        
    }
    document.getElementById("marca").value = ""
    document.getElementById("ano").value = "" 
    document.getElementById("valor").value = ""
    var objPessoa = ArrPessoas.find(a => a.id == PessoaSelecionada)
    objPessoa.ArrCarros.push(Carros)    
    
}

function Exibir(){
    
    var resposta = document.getElementById("respostas")
    ArrPessoas.forEach(function(item){
        resposta.innerHTML += `Nome:${item.Nome}<br> Telefone: ${item.Telefone}<br>`
        item.ArrCarros.forEach(function(itemCarro){
            resposta.innerHTML+= `Marca do carro: ${itemCarro.Marca} <br> Ano do Carro: ${itemCarro.Ano}<br>`
        });
        var total = 0
        item.ArrCarros.forEach(function(itemValor){
            total += Number(itemValor.Valor)
            
        });
        TotMV = Number(total/item.ArrCarros.length)
        resposta.innerHTML += `Média de valores dos carros inseridos: ${TotMV}<br>`         
        item.ArrCarros.sort(function(a,b){
            a.Valor - b.Valor        
        })
        resposta.innerHTML += `Carro com menor valor: ${item.ArrCarros[0].Valor}<br>`
        resposta.innerHTML += `Carro com maior valor:${item.ArrCarros[item.ArrCarros.length-1].Valor}<br>`
    });     
}
