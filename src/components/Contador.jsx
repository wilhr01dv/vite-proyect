import { useState } from 'react'

function Contador() {
  const [cuenta, setCuenta] = useState(0)

  return (
    <div className="demo-texto">
      <p>Contador: {cuenta}</p>
      <button type="button" onClick={() => setCuenta((c) => c + 1)}>
        Sumar +1
      </button>
    </div>
  )
}

export default Contador
