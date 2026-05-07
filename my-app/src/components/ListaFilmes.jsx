import "./ListaFilmes.css"

function ListaFilmes() {
  const filmes = [
    { id: 1, titulo: "O Poderoso Chefão", categoria: "Drama", nota: 9.2 },
    { id: 2, titulo: "O Senhor dos Anéis: O Retorno do Rei", categoria: "Fantasia", nota: 8.9 },
    { id: 3, titulo: "Pulp Fiction", categoria: "Crime", nota: 8.9 },
    { id: 4, titulo: "A Origem", categoria: "Sci-Fi", nota: 8.8 },
    { id: 5, titulo: "Matrix", categoria: "Sci-Fi", nota: 8.7 }
  ];

  return (
    <div className="lista-filmes">
      <h2 className="titulo-filmes">Lista de Filmes</h2>
      <ul>
        {filmes.map(filme => (
          <li key={filme.id} className="card-filmes">
            <h3>{filme.titulo}</h3>
            <p>Categoria: {filme.categoria}</p>
            <p>Nota: {filme.nota}</p>
            <button>Assistir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaFilmes;