import "./CssCondicional.css";

function CssCondicional() {
  const alunos = [
    { id: 1, nome: "João", nota: 8 },
    { id: 2, nome: "Maria", nota: 5 },
    { id: 3, nome: "Pedro", nota: 9 },
    { id: 4, nome: "Ana", nota: 6 }
  ];
  
  return (
    <div className="container">
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map(aluno => (
          <li key={aluno.id} className={aluno.nota >= 7 ? "aprovado" : "reprovado"}>
            {aluno.nome} - Nota: {aluno.nota}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CssCondicional