import "./ListaProdutos.css"

function ListaProdutos() {
  const produtos = [
    {
      id: 1,
      nome: "Mouse Gamer",
      preco: 150,
      cor: "#ffb3b3"
    },
    {
      id: 2,
      nome: "Teclado Mecânico",
      preco: 300,
      cor: "#b3d9ff"
    },
    {
      id: 3,
      nome: "Monitor 240hz",
      preco: 1800,
      cor: "#b3ffcc"
    }
  ]

  return (
    <div className="container">
      {produtos.map((produto) => (
        <div
          key={produto.id}
          className="card"
          style={{ backgroundColor: produto.cor }}
        >
          <h2>{produto.nome}</h2>
          <p>R$ {produto.preco}</p>
        </div>
      ))}
    </div>
  )
}

export default ListaProdutos;