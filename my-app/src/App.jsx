import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Capturar from './components/Capturar'

function App() {
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
}

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
