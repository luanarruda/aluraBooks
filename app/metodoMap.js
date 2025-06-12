function aplicarDesconto(livros) {
	const desconto = 0.3; // 30% de desconto
	livrosComDesconto = livros.map(livro => {
		return {
			//... faz uma copia do array e altera o preco
			...livro,
			preco: livro.preco - (livro.preco * desconto)
		}
	})

	return livrosComDesconto;
}