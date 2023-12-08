{/* Componente sobre, com informações sobre o projeto e/ou sobre a empresa*/}

import React from 'react'
import NavigationBar from '../components/Menu'
import Rodape from '../components/Rodape'
import BotaoVoltar from '../components/BotaoVoltar'

const About = props => (
    <div >
        <NavigationBar/>
        <section style={{justifyContent:'center', alignContent:'center', alignItems:'center', width:'100%', display:"flex" , flexDirection:'column', minHeight: '60vh'}}>
            <h1 style={{ borderBottom:'3px solid #27461f'}}>Sobre este projeto:</h1>
            <h2>Esse é um pequeno projeto que tem o objetivo de desenvolver um </h2>
            <h2>MVP (Mínimo Produto Viável)</h2>
            <h2>para Conclusão do Módulo III - Pós-graduação em Desenvolvimento Full Stack</h2>
            <h2 style={{paddingBottom:'25px', borderBottom:'3px solid #27461f'}}>Requisitos: Componentização em React, JavaScript, Nodejs e Figma</h2>
            <h2>Telefone de contato:</h2>
            <h2>E-mail de contato:  </h2>
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