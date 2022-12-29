import React from 'react'

const Pagination = ({pagina, setPagina, end}) => {

  return (
    <section>
      <h1>{pagina + 1 }</h1>
      <button onClick={() => setPagina(0)}> Inicio </button>
      <button onClick={() => setPagina(pagina - 1)}> Anterior </button>
      <button onClick={() => setPagina(pagina + 1)}> Siguiente </button>
      <button onClick={() => setPagina(end)}> Final </button>
    </section>
  )
}

export default Pagination