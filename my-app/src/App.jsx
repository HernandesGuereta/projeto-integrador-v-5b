import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardAluno from './components/CardAluno'
import ListaProdutos from './components/ListaProdutos'
import MenuHorizontal from './components/MenuHorizontal'
import CssCondicional from './components/CssCondicional'
import ListaFilmes from './components/ListaFilmes'
import CssInline from './components/CssInline'

function App() {
  return (
    <div>
      <CssInline />
    </div>
  );
}

/* Formulario */
/* function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    idade: '',
    ativo: false,
    observacao: ''
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div id="container">
      <h2 id="titulo">Formulário de Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={form.nome} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Idade:
          <input type="number" name="idade" value={form.idade} onChange={handleChange} />
        </label>
        <br />
        <label>
          Ativo:
          <input type="checkbox" name="ativo" checked={form.ativo} onChange={handleChange} />
        </label>
        <br />
        <label>
          Observação:
          <textarea name="observacao" value={form.observacao} onChange={handleChange}></textarea>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
} */





/*Formulario */

/* function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    cidade: '',
    perfil: '',
    receberNotificacoes: false,
    observacoes: ''
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
}

console.log(form)


return (
  <div id="container">
    <h2 id="titulo">Formulário de Cadastro</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" name="nome" value={form.nome} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Cidade:
        <input type="text" name="cidade" value={form.cidade} onChange={handleChange} />
      </label>
      <br />
      <label>
        Perfil:
        <select name="perfil" value={form.perfil} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="estudante">Estudante</option>
          <option value="profissional">Profissional</option>
          <option value="outro">Outro</option>
        </select>
      </label>
      <br />
      <label>
        Receber notificações:
        <input type="checkbox" name="receberNotificacoes" checked={form.receberNotificacoes} onChange={handleChange} />
      </label>
      <br />
      <label>
        Observações:
        <textarea name="observacoes" value={form.observacoes} onChange={handleChange}></textarea>
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>

      <h3>Dados digitados:</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>
  </div>
) */



/* Tarefa adicao e exclusao de input */
/* function App() {
  const [nome, setNome] = useState('')
  const [nomelist, setNomelist] = useState([])
  function exibirNome() {
    setNomelist([...nomelist, nome])
  }
  function excluirNome(index) { 
    const novaLista = [...nomelist]
    novaLista.splice(index, 1)
    setNomelist(novaLista)
  }

  
  return (
    <div id="principal">
      <h2 id="titulo">Digite seu nome</h2>
      <input type="text" placeholder="Seu nome" onChange={(e) => setNome(e.target.value)}/>
      <button onClick={exibirNome}>Clique aqui</button>
      {nomelist.map((nomelist, index)=><li key={index}>{nomelist} <button onClick={() => excluirNome(index)}>Excluir</button></li>)}
    </div> 
    )
} */

/* Formulario email e nome */

/* function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [objto, setObjto] = useState({ nome: '', email: '' })
  function exibirFormulario() {
    setObjto({...objto, nome: nome, email: email})
  }
    <div id="container">
      <form class="formulario">
        <h2 id="titulo">Digite seu nome: </h2>
        <input type="text" placeholder="Seu nome" onChange={(e) => setNome(e.target.value)}/>
        <h2 id="titulo">Digite seu email: </h2>
        <input type="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={exibirFormulario}>Clique aqui</button>
        {objto.nome && objto.email ? <p>Nome: {objto.nome} - Email: {objto.email}</p> : null}
      </form>
    </div> */

/* -------------------------------- */
/* Colocar o nome no input */
/*    <div id="principal">
      <h2 id="titulo">Digite seu nome</h2>
      <input type="text" placeholder="Seu nome" onChange={(e) => setNome(e.target.value)}/>
      <button onClick={exibirNome}>Clique aqui</button>
      {nomelist.map((nomelist, index)=><li key={index}>{nomelist}</li>)}
    </div> */

/* ----------------------------- */
/* botao contador */
/*  <div>
      <Titulo />
      <Aluno />
      <button onClick={() => Botao()}>Clique aqui</button>
      <input type="text" onChange={Capturar} />
    </div> */


export default App
