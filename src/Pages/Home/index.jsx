import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>Olá Mundo!</h1><br />
      <Link to='/sobre'>Pagina Sobre</Link>
    </div>
  );
}
