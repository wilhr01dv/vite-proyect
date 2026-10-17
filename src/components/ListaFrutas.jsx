function ListaFrutas() {
  const frutas = ['Manzana', 'Banana', 'Naranja', 'Fresa']

  return (
    <ul className="lista-frutas">
      {frutas.map((fruta) => (
        <li key={fruta}>{fruta}</li>
      ))}
    </ul>
  )
}

export default ListaFrutas
