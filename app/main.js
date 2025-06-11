let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// funcao de busca dos livros
getBuscarLivrosDaApi()
async function getBuscarLivrosDaApi() {
	const res = await fetch(endpointDaApi)
	livros = await res.json()
	console.table(livros);
}