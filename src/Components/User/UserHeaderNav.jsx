import React from 'react';
import { NavLink } from 'react-router-dom';


const UserHeaderNav = () => {
  return (
    <nav>
      <NavLink to="/conta">Minhas Fotos</NavLink>
      <NavLink to="/conta/estatistica">Estatísticas</NavLink>
      <NavLink to="/conta/postar">Adicionar Fotos</NavLink>
      <button>Sair</button>
    </nav>
  )
}

export default UserHeaderNav
