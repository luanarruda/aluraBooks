let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// funcao de busca dos livros
getBuscarLivrosDaApi()

const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaApi() {
	const res = await fetch(endpointDaApi);
	livros = await res.json()
	console.table(livros);
	exibirLivrosNaTela(livros);
}

//função para exibir os livros na tela
// e inserir no elemento HTML
function exibirLivrosNaTela(listaDeLivros) {
	listaDeLivros.forEach(livro => {
		elementoParaInserirLivros.innerHTML += `
		<div class="livro">
			<img class="livro__imagem" src="${livro.imagem}" alt="${livro.alt}">
			<h2 class="livro__titulo">${livro.titulo}</h2>
			<p class="livro__descricao">${livro.autor}</p>
			<p class="livro__preco">R$ ${livro.preco.toFixed(2)}</p>
			<div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>`

	});
}