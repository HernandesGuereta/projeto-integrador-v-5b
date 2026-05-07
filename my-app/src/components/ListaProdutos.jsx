import './ListaProdutos.css'

function ListaProdutos() {
  return (
    <div className="lista">
      <h2>Lista de Produtos</h2>
      <ul>
        <li className="produto1">Teclado R$ 100,00</li>
        <li className="produto2">Mouse R$ 50,00</li>
        <li className="produto3">Monitor R$ 300,00</li>
      </ul>
    </div>
  );
}

export default ListaProdutos;