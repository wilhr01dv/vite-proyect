import { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import { Main } from './components/FComponent'
import PanelUsuario from './components/PanelUsuario'
import Funciones from './components/Funciones'
import ListaFrutas from './components/ListaFrutas'
import Contador from './components/Contador'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <header className="encabezado">
        <p className="nombre">Wilfredo Huallpa Rodriguez</p>
        <h1>ejercicios de React</h1>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </header>

      <section id="ejercicios">
        <h2>Ejercicios realizados en clase</h2>

        <div className="grid">
          <article className="card">
            <h3>Hello World</h3>
            <p className="subtitle">Primer componente</p>
            <div className="demo">
              <HelloWorld />
            </div>
          </article>

          <article className="card">
            <h3>Componentes</h3>
            <p className="subtitle">FComponent y Main</p>
            <div className="demo">
              <Main />
            </div>
          </article>

          <article className="card">
            <h3>Renderizado </h3>
            <p className="subtitle">Perfil y estados</p>
            <div className="demo">
              <PanelUsuario />
            </div>
          </article>

          <article className="card">
            <h3>Lista de frutas</h3>
            <p className="subtitle">Uso de map()</p>
            <div className="demo">
              <ListaFrutas />
            </div>
          </article>

          <article className="card">
            <h3>Variables y funciones</h3>
            <p className="subtitle">Expresiones JSX</p>
            <div className="demo">
              <Funciones />
            </div>
          </article>

          <article className="card">
            <h3>Contador</h3>
            <p className="subtitle">Estado con useState</p>
            <div className="demo">
              <Contador />
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
