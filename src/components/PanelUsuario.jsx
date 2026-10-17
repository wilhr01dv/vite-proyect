import { useState } from 'react'

//Renderizado condicional para  panel de usuario, con estados de carga, usuario logeado y usuario no logeado
function PanelUsuario() {
  const [isLogged, setIsLogged] = useState(true)

  const isLogging = false
  const usuario = isLogged ? { nombre: 'Jose', bio: 'Estudinatee' } : null

  if (isLogging) {
    return <div>Cargando perfil....</div>
  }

  if (!usuario) {
    return (
      <div>
        <div>No existe usuario</div>
        <button onClick={() => setIsLogged(true)}>Iniciar sesión</button>
      </div>
    )
  }

  return (
    <div>
      <div className="perfil">
        <p>{usuario.nombre}</p>
        <p>{usuario.bio}</p>s
      </div>
      <button onClick={() => setIsLogged(false)}>Cerrar sesión</button>
    </div>
  )
}

export default PanelUsuario
