{/* Componente de itens  carregados da api veículo*/}
import { useState } from "react";
import '../assets/css/Item.css'
import iconCarros from '../assets/imagens/car-front.svg'
import ModalPopUp from "./ModalPersonalizado"; {/* Componente de popup para substituir os alerts e confirm - Possibilidade de implementação futura */}
import { Avatar } from "@mui/material"; {/* Componente de avatar para substituir reportar o usuário logado - Possibilidade de implementação futura */}

import * as React from 'react';


export default function Item(props) {


    const [quantity, setQuantity] = useState(1)
    const [valueButton, setValueButton] = useState(true)
    const auto = props.auto
    
    // Função para subtrair o valor da quantidade de um produto
    const minus = () => {
        (quantity - 1) === 1 ? setValueButton(true) : setValueButton(false)
        if (quantity !== 1) {
            setQuantity(quantity - 1)
        }
    }


    // Função para somar valor da quantidade de um produto
    const plus = () => {
        setValueButton(false)
        setQuantity(quantity + 1)
    }

    // Função para comprar um produto informando o preço final
    const buyAuto = () => {
        if (window.confirm(`Preço final: ${Math.round((auto.valor_diaria * quantity) * 100) / 100}`)) {
            alert('Veículo locado com sucesso!');
            setQuantity(1)
        }
    }


    return (
        <article className="card">
            {/*<img src={iconCarros} height='20px' width='20px' alt="auto"/> - possível melhoria para próxima versão*/}
            {/*<Avatar variant="rounded" src="../assets/imagens/car-front.svg" /> - possível melhoria para próxima versão*/}
            <h3 className="price-auto">
            <img src={iconCarros} style={{paddingTop:'5px', paddingRight:'10px'}} height='20px' width='20px' alt="auto"/>
            {auto.nome}
            </h3>
            <p className="price-product">Valor da diária: R$ <span>{auto.valor_diaria}</span></p>
            
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center" }}>
                <div className="quantity">
                    <span >Quantidade:</span>
                    <button disabled={valueButton} className="minus" onClick={minus}>-</button>
                    <span>{quantity}</span>
                    <button className="plus" onClick={plus}>+</button>
                    <button className="buy" id='locar' onClick={buyAuto}>Locar</button>
                </div>
            </div>
        </article>
    );
}