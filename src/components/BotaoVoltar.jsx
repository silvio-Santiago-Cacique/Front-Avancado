{/* Componente BotãoVoltar*/}
import React, { useState } from 'react';
import '../assets/css/Botao.css';

function BotaoVoltar () {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };

    return (
        <div style={{marginBottom:'50px'}}>
            <img src="" alt="" />
            <a href="/" style={{
                display:"flex",
                position:'relative',
                marginBottom:0,
                marginTop:'15px',
                justifyContent:"center",
                alignItems:'center',
                //gradiente condicional
                background: !isHover ? 'linear-gradient(rgba(20,50,50,0.8),transparent)' : 'linear-gradient(rgba(0,50,100,0.8),transparent)',
                color: !isHover ? 'blue': 'yellow',
                transform: !isHover ? 'scale(1)': 'scale(1.1)',
                padding:'10px',
                borderRadius:'20px',
                minWidth:'400px',
                maxWidth:'600px',
                textDecoration:'none',
                }}
                //eventos do botão (ao entrar e sair do mouse)
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
            Voltar a tela principal</a>
    </div>
    )
}


export default BotaoVoltar