const elementoParaInserirLivros = document.getElementById('livros');


//função para exibir os livros na tela
// e inserir no elemento HTML
function exibirLivrosNaTela(listaDeLivros) {
	elementoParaInserirLivros.innerHTML = ''; // Limpa o conteúdo anteriormente exibido
	listaDeLivros.forEach(livro => {
		//funcao veridica disponibilidade
		// let disponibilidade = verificarDisponibilidadeDoLivro(livro);
		let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
		
		elementoParaInserirLivros.innerHTML += `
		<div class="livro">
			<img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}">
			<h2 class="livro__titulo">${livro.titulo}</h2>
			<p class="livro__descricao">${livro.autor}</p>
			<p class="livro__preco">R$ ${livro.preco.toFixed(2)}</p>
			<div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>`

	});
}

// function verificarDisponibilidadeDoLivro(livro) {
// 	if (livro.quantidade > 0) {
// 		return 'livro_imagens';
// 	} else {
// 		return `
// 			livro__imagens indisponivel`;
// 	}
// }