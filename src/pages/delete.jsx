import React from 'react';
import { Link } from 'react-router-dom';

function Delete(props) {
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
    </div>
  );
}

export default Delete;