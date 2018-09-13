console.log('J.S - version 2.0');

var $btnTable = document.getElementById('btnTabela');
var $tableBody = document.getElementById('tableBody');
var $paginacao = document.getElementById('paginacao');
var $itensPorPagina = document.getElementById('itensPorPagina');

var arr = ["1", "T2", "T3", "Teste", "Ronaldo", "KKKK", "Sorte", "MáSorte", "QuemSabe", "R10",
"ZXXXX", "____", "123456789", "00000", "77747", "Teste_", "Paginacao", "Em_JS", "Tes", "COm",
"Mais Itnes", "será que foi", "sem erros", "JS", "tá", "da hora", "treino", "em", "teste", "to",
"sem", "ir", "a", "academia", "faz", "duas semanas", "154541", "54020", "Rocky", "Balboa", "Creed",
"Filme", "fera"];

function Paginacao(itens, paginaAtual, itensPorPagina){
    let result = [];
    let totalPaginas = Math.ceil(itens.length / itensPorPagina);
    let itemInicialPagina = (paginaAtual * itensPorPagina) - itensPorPagina;
    let itemFinalPagina = itemInicialPagina + itensPorPagina;
    
    if(paginaAtual <= totalPaginas){
        for(let i=itemInicialPagina; i < itemFinalPagina; i++){
            if(itens[i] != null){
                result.push(itens[i]);
            }
            itemInicialPagina++;
        }
    }
    return result;
}

function CriarPaginas(itens, itensPorPagina){
    let numeroPaginas = Math.ceil(itens.length / itensPorPagina);
    for(let i = 1; i <= numeroPaginas; i++){
        var $page = document.createElement('button');
        $page.id = i;
        $page.innerText = i;
        $page.setAttribute('onclick', 'Pagina('+i+')');
        $paginacao.appendChild($page);
    }
}

function Pagina(pag){
    $tableBody.innerHTML = "";
    var res = Paginacao(arr, parseInt(pag), parseInt($itensPorPagina.value));
    carregaTable(res);
}

$itensPorPagina.addEventListener("click", function(){
    $paginacao.innerHTML = "";
    $tableBody.innerHTML = "";
    CriarPaginas(arr, $itensPorPagina.value);
    Pagina(1);
});

function carregaTable(registros){
    registros.forEach((element,i) => {
        var $linha = document.createElement('tr');
        var $coluna = document.createElement('td');
        $linha.id = i;
        $linha.appendChild($coluna);
        $coluna.innerText = element;
        $tableBody.appendChild($linha);
    });
}

CriarPaginas(arr, $itensPorPagina.value);
Pagina(1);
