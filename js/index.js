
function criarCard(produto){

    const cardProduto        = document.createElement('div');
    const cardProdutoInterno = document.createElement('div');
    const divImagem          = document.createElement('div');
    const divCategoria       = document.createElement('div');
    const divNome            = document.createElement('div');
    const divDescricao       = document.createElement('div');
    const divPreco           = document.createElement('div');
    const divAddCarrinho     = document.createElement('div');
    const imagem             = document.createElement('img');
    const categoria          = document.createElement('h3');
    const nome               = document.createElement('h2');
    const descricao          = document.createElement('h4');
    const preco              = document.createElement('h5');
    const addCarrinho        = document.createElement('button');
    
    cardProduto              .classList.add('card-produto');
    cardProdutoInterno       .classList.add('card-produto-interno');
    divImagem                .classList.add('imagem-produto');
    divCategoria             .classList.add('categoria-produto');
    divNome                  .classList.add('nome-produto');
    divDescricao             .classList.add('descricao-produto');
    divPreco                 .classList.add('preco-produto');
    divAddCarrinho           .classList.add('botao-add-carrinho');
    imagem                   .classList.add('imagem');
    categoria                .classList.add('categoria');
    nome                     .classList.add('nome');
    descricao                .classList.add('descricao');
    preco                    .classList.add('preco');
    addCarrinho              .classList.add('botao');
    
    imagem.src               = produto.img;
    imagem.alt               = produto.imgAlt;
    categoria.innerText      = produto.tag;
    nome.innerText           = produto.nameItem;
    descricao.innerText      = produto.description;
    preco.innerText          = `R$${produto.value.toFixed(2)}`;
    addCarrinho.innerText    = produto.addCart;
    addCarrinho.id           = produto.id
    
    cardProduto              .appendChild(cardProdutoInterno)
    cardProdutoInterno       .appendChild(divImagem);
    cardProdutoInterno       .appendChild(divCategoria);
    cardProdutoInterno       .appendChild(divNome);
    cardProdutoInterno       .appendChild(divDescricao);
    cardProdutoInterno       .appendChild(divPreco);
    cardProdutoInterno       .appendChild(divAddCarrinho);
    divImagem                .appendChild(imagem);
    divCategoria             .appendChild(categoria);
    divNome                  .appendChild(nome);
    divDescricao             .appendChild(descricao);
    divPreco                 .appendChild(preco);
    divAddCarrinho           .appendChild(addCarrinho);

    document                 .querySelector('.container-produtos').appendChild(cardProduto);

    addCarrinho.addEventListener('click', produto_selecionado);

    return cardProduto;
}

function criarCardCarrinho(produto){
    
    const card_carrinho         = document.createElement('div');
    const produto_div_img       = document.createElement('div');
    const produto_img           = document.createElement('img');
    const produto_div_info      = document.createElement('div');
    const produto_div_nome      = document.createElement('div');
    const produto_nome          = document.createElement('h4');
    const produto_div_preco     = document.createElement('div');
    const produto_preco         = document.createElement('h5');
    const produto_div_botao     = document.createElement('div');
    const produto_remover       = document.createElement('button');
    
    produto_img.src             = produto.img;
    produto_img.alt             = produto.imgAlt;
    produto_nome.innerText      = produto.nameItem;
    produto_preco.innerText     = `R$${produto.value.toFixed(2)}`;
    produto_remover.innerText   = 'Remover produto'
    produto_remover.id          = produto.id
    
    card_carrinho               .classList.add('card-carrinho');
    produto_div_img             .classList.add('produto-div-img');
    produto_img                 .classList.add('produto-img');
    produto_div_info            .classList.add('produto-div-info');
    produto_div_nome            .classList.add('produto-div-nome');
    produto_nome                .classList.add('produto-nome');
    produto_div_preco           .classList.add('produto-div-preco');
    produto_preco               .classList.add('produto-preco');
    produto_div_botao           .classList.add('produto-div-botao');
    produto_remover             .classList.add('produto-botao');
    
    card_carrinho               .appendChild(produto_div_img);
    card_carrinho               .appendChild(produto_div_info);
    produto_div_img             .appendChild(produto_img);
    produto_div_info            .appendChild(produto_div_nome);
    produto_div_info            .appendChild(produto_div_preco);
    produto_div_info            .appendChild(produto_div_botao);
    produto_div_nome            .appendChild(produto_nome);
    produto_div_preco           .appendChild(produto_preco);
    produto_div_botao           .appendChild(produto_remover);

    document.querySelector('.container-compras-vazio').appendChild(card_carrinho)
    
    produto_remover.addEventListener('click', remover_produto_selecionado)
    
    return card_carrinho
}

const produtos_no_carrinho = [];

function produto_selecionado(e){
    const resultado = e.path[0].id
    for(let i = 0; i < data_base.length; i++){
        const produto = data_base[i];
        if(produto.id == resultado){
            criarCardCarrinho(produto)
            produtos_no_carrinho.push(produto)
        }
    }
}
function listarProdutos(produtos){
    for(let i = 0; i < produtos.length; i++){
        const produto = produtos[i];
        const card    = criarCard(produto);
    }
}
listarProdutos(data_base);


/* -------------------------remover produto do carrinho------------------------------ */
/* Falta desenvolver */



/* ----------------------filtrando por categoria---------------------------- */

document.querySelector('.todos')        .addEventListener('click', listar_todos)
document.querySelector('.mouses')       .addEventListener('click', listar_mouses)
document.querySelector('.teclados')     .addEventListener('click', listar_teclados)
document.querySelector('.headsets')     .addEventListener('click', listar_headsets)
document.querySelector('.acessorios')   .addEventListener('click', listar_acessorios)

function listar_todos(produtos){
    document.querySelector('.container-produtos').innerHTML = ''
    for(let i = 0; i < data_base.length; i++){
        criarCard(data_base[i])
    }
}

function listar_mouses(produtos){
    document.querySelector('.container-produtos').innerHTML = ''
    for(let i = 0; i < data_base.length; i++){
        if(data_base[i].tag == 'Mouses'){
            criarCard(data_base[i])
        }
    }
}

function listar_teclados(produtos){
    document.querySelector('.container-produtos').innerHTML = ''
    for(let i = 0; i < data_base.length; i++){
        if(data_base[i].tag == 'Teclados'){
            criarCard(data_base[i])
        }
    }
}

function listar_headsets(produtos){
    document.querySelector('.container-produtos').innerHTML = ''
    for(let i = 0; i < data_base.length; i++){
        if(data_base[i].tag == 'Headsets'){
            criarCard(data_base[i])
        }
    }
}

function listar_acessorios(produtos){
    document.querySelector('.container-produtos').innerHTML = ''
    for(let i = 0; i < data_base.length; i++){
        if(data_base[i].tag == 'Acessórios'){
            criarCard(data_base[i])
        }
    }
}

/* ----------------------filtrando por pesquisa---------------------------- */
/* por enquando apenas uma palavra por vez ou nome completo  */

const botao_pesquisar = document.querySelector('.pesquisar')
const texto_pesquisa  = document.querySelector('input');
console.log(texto_pesquisa)

botao_pesquisar.addEventListener('click', pesquisar_produto)

texto_pesquisa.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        pesquisar_produto()
    }
})

function pesquisar_produto(){
    document.querySelector('.container-produtos').innerHTML = ''
    const text = texto_pesquisa.value
    for(let i = 0; i < data_base.length; i++){
        for(let u = 0; u < text.split(" ").length; u++){
            if(data_base[i].nameItem.toUpperCase().split(" ").includes(text.toUpperCase()) == true 
            || data_base[i].nameItem.toUpperCase() == text.toUpperCase()){
                criarCard(data_base[i])
            }
            break
        }
    }
}

function listarNomes(produtos){
    const listaNomes = [];
    for(let i = 0; i < produtos.length; i++){
        const arrayNomes = produtos[i].nameItem.split(' ')
        for(let u = 0; u < arrayNomes.length; u++){
            if(listaNomes.includes(arrayNomes[u]) == false){
                listaNomes.push(arrayNomes[u])
            }
        }
    }
    return listaNomes
}
listarNomes(data_base)

