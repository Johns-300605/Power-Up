function pesquisar() {
    let section = document.getElementById("Power-up");
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for uma string sem nada 
if(campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

//Inicializa uma string vazia para armazenaros resultados
let resultado = "";
let titulo = "";
let descricao = "";
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase
    // se titulo includes campoPesquisa 
    if (dado.titulo.includes(campoPesquisa)) || dado.descricao.includes(captureEvents) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descrição-meta">${dado.descricao}</p>
        <a href="${dado.link} target="_blank">Mais informações sobre Hideo Kojima aqui</a>
    </div>
    `
}
    }
    //então faça.... 
    console.log(dado.titulo.includes(campoPesquisa))
    

section.innerHTML = resultados
}
//console.log(dados);

