import React from 'react'

const Pagination = ({pagina, setPagina, end}) => {

  const indexButtonStart = ()=>setPagina(0)
  const indexButton1 = ()=>setPagina(pagina+1)
  const indexButton2 = ()=>setPagina(pagina+2)
  const indexButton3 = ()=>setPagina(pagina+3)
  const indexButton4 = ()=>setPagina(pagina+4)
  const indexButton5 = ()=>setPagina(pagina+5)
  const indexButton6 = ()=>setPagina(pagina+6)
  const indexButtonEnd = ()=>setPagina(end)
  console.log(pagina)

  return (
    <div className='pagination-container-container'>
          <div className='pagination-container'>
    <section className='pagination'>
      <button className='button-StarEnd' onClick={indexButtonStart}> Inicio </button>
      <button className='button-pagination' onClick={indexButton1}><h3>{pagina + 2}</h3></button>
      <button className='button-pagination' onClick={indexButton2}><h3>{pagina + 3}</h3></button>
      <button className='button-pagination' onClick={indexButton3}><h3>{pagina + 4}</h3></button>
      <button className='button-pagination' onClick={indexButton4}><h3>{pagina + 5}</h3></button>
      <button className='button-pagination' onClick={indexButton5}><h3>{pagina + 6}</h3></button>
      <button className='button-pagination' onClick={indexButton6}><h3>{pagina + 7}</h3></button>
      <button className='button-StarEnd' onClick={indexButtonEnd}> Final </button>
    </section>
    </div>
    </div>
  )
}

export default Pagination