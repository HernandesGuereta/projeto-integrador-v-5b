import "./TelaUsuarios.css"

function TelaUsuarios() {
  const usuarios = [
    { id: 1, nome: "João Silva", email: "joao.silva@example.com", telefone: "(11) 98765-4321" },
    { id: 2, nome: "Maria Oliveira", email: "maria.oliveira@example.com", telefone: "(11) 98765-4322" },
    { id: 3, nome: "Carlos Santos", email: "carlos.santos@example.com", telefone: "(11) 98765-4323" },
    { id: 4, nome: "Ana Costa", email: "ana.costa@example.com", telefone: "(11) 98765-4324" },
    { id: 5, nome: "Pedro Almeida", email: "pedro.almeida@example.com", telefone: "(11) 98765-4325" }
];

return (
    <div className="tela-usuarios">
        <h2 className="titulo-usuarios">Lista de Usuários</h2>
        <ul>
            {usuarios.map(usuario => (
                <li key={usuario.id} className="card-usuarios">
                    <h3>{usuario.nome}</h3>
                    <p>Email: {usuario.email}</p>
                    <p>Telefone: {usuario.telefone}</p>
                </li>
            ))}
        </ul>
    </div>
);
}

export default TelaUsuarios;
    