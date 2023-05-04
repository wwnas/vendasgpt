import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Chat</Link>
        </li>
        <li>
          <Link to="/predefined">Perguntas Pré-definidas</Link>
        </li>
        <li>
          <Link to="/top">Top Consultas</Link>
        </li>
        <li>
          <Link to="/trending">Tópicos em Alta</Link>
        </li>
        <li>
          <Link to="/subscribe">Assinatura</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
