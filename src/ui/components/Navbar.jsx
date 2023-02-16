import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h1>Busca ofertas en autos economicos, deportivos y de lujo</h1>
        <form className='formulario'>
            <input type="text" />
            <input type="text" />
            <button>Buscar</button>
        </form>
    </div>
  )
}

export default Navbar