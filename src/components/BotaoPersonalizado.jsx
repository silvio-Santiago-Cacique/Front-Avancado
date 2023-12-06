{/* Componente de Botão personalizado - outro protótipo que permite alterar todas as propriedades e o evento click to botão*/}

import React from 'react';
import '../assets/css/Botao.css';

function Button(props) {
  const { title, image, bgcolor, color, disabled, onClick, imagePosition } = props;
  const style = {
    backgroundColor: bgcolor,
    color:color,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };
  const imageStyle = {
    float: imagePosition === 'right' ? 'right' : 'left',
  };
  return (
    <button style={style} disabled={disabled} onClick={onClick}>
      {image && <img src={image} alt={title} style={imageStyle} />}
      <span>{title}</span>
    </button>
  );
}

export default Button;