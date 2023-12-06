{/* Componente tabela para listar os veículos e permitir que o usuário interaja com a api.
Este compontente ainda não foi implementado nesta versão, apesar de já completamente funcional. Esta implementação ficará para a próxima versão.
*/}


import React, { useState, useEffect } from 'react';
import './table.css';{/* importa o css externo */}

function Table(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [props.url]);

  function handleEdit(id) {
    // Navegar para pagina edit.jsx
  }

  function handleDelete(id) {
    // Navegar para pagina delete.jsx
  }

  return (
    <table>
      {/* Cabeçalho da tabela */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Descrição</th>
          <th>Data de Cadastro</th>
          <th>Placa</th>
          <th>Imagem</th>
          <th>Valor Diária</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {/* corpo da tabela, linhas e colunas com dois icones que direcionam para editar e apagar os dados vindos da api */}
        {data.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? 'even' : 'odd'}>
            <td>{item.id}</td>
            <td>{item.descricao}</td>
            <td>{item.data_cadastro}</td>
            <td>{item.placa}</td>
            <td>
              <img src={item.imagem} alt={item.descricao} />
            </td>
            <td>{item.valor_diaria}</td>
            <td>
              <button onClick={() => handleEdit(item.id)}>
                <i className="fa fa-pencil"></i>
              </button>
              <button onClick={() => handleDelete(item.id)}>
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;