{/* Componente card personalizado*/}
import React, { useState, useEffect } from 'react';
import Button from '../components/BotaoPersonalizado'
import '../assets/css/Card.css'
import { Link } from "react-router-dom";
import imagem from '../assets/imagens/iconAtencao.png'
import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
    Navigate,
  } from "react-router-dom";
import { CardHeader } from '@mui/material';
import { CardBody, CardFooter, CardImg, Container } from 'react-bootstrap';

function redicionalink (props){ 
    window.location.href = props.linkbtn
    console.log(props.linkbtn)
}

function CardCustom(props) {
    const bgcolor = props.bgcolor
    const color = props.color
    const irlink = props.linkbtn
    const img = imagem



    return (
        <Container className="card">
            <img src={imagem}/>
            <h3>{props.title}</h3>
            <p>{props.corpo}</p>
            <p>{props.info}</p>

            <Button 
                title={props.title} bgcolor={props.bgcolor} color={props.color} variant="primary" onClick={() => window.location.href = props.linkbtn}>
            </Button>
            {/*} <a style={{color:{color}, backgroundColor:{bgcolor}}} href={props.linkbtn}>{props.title}</a>*/}

        </Container>
        
    );
}

export default CardCustom;