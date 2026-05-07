import "./BotaoDinamico.css"

function Botoes() {

  const botoes = [
    { id: 1, texto: "Sucesso", tipo: "sucesso" },
    { id: 2, texto: "Erro", tipo: "erro" },
    { id: 3, texto: "Aviso", tipo: "aviso" }
  ]

  return (
    <div className="container">

      <h1>Botões Dinâmicos</h1>

      <div className="grupo-botoes">

        {botoes.map((botao) => (
          <button
            key={botao.id}
            className={`botao ${botao.tipo}`}
          >
            {botao.texto}
          </button>
        ))}

      </div>

    </div>
  )
}

export default Botoes