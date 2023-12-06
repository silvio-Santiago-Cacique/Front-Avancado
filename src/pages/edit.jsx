import React from 'react';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';

function Edit(props) {
  const { id } = props.match.params;
  const { description } = props.location.state;

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Voltar</Link>
          </li>
        </ul>
      </nav>
      <h1>{description}</h1>
      <p>ID: {id}</p>
      <Rodape/>
    </div>
  );
}

export default Edit;
