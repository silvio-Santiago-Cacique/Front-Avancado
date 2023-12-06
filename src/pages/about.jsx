{/* Componente sobre, com informações sobre o projeto e/ou sobre a empresa*/}

import React from 'react'
import Rodape from '../components/Rodape'
import BotaoVoltar from '../components/BotaoVoltar'

const About = props => (
    <div >
        <section style={{alignContent:'center', alignItems:'center', width:'100%', display:"flex" , flexDirection:'column', minHeight: '60vh'}}>
            <h1 >Sobre</h1>
            <h2>O nosso sistema foi criado por...</h2>
            <h2>Emails de contato:</h2>
            <h2>Telefone de contato:</h2>
        </section>
        <section style={{display:'flex', alignContent:'center', justifyContent:'center', marginBottom:'10px'}}>
            <BotaoVoltar/>
        </section>
        <section className='main'>
            <Rodape />
        </section>
    </div>
)

export default About