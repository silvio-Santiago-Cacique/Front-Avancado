{/* Componente de menu superior principal*/}
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import imageUser from '../assets/imagens/iconuser1.svg'
import imageCarrinho from '../assets/imagens/Carrinho.svg'

function NavigationBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        {/* Itens do menu com as chamadas às respectivas rotas */}

        <Nav defaultActiveKey='/home' className="ms-auto">
          <Nav.Link href="/">Página Principal</Nav.Link>
          <Nav.Link href="/produtos">Veículos</Nav.Link>
          <Nav.Link href="/clientes">Clientes</Nav.Link>
        </Nav>
        <div>
          <Nav>
             <Image src={imageUser}  style={{cursor:'pointer', marginTop:'1.2em'}}  height={22} width={22} />
            <Nav.Link href="/usuario" >Usuário </Nav.Link> 
          </Nav>
          
        </div>
    </Navbar>
  );
}

export default NavigationBar;