{/* Componente de rodape com carrinho e links de contato */}
import React from 'react';
import Image from 'react-bootstrap/Image'
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'
import '../assets/css/Rodape.css'
import imageFb from '../assets/imagens/iconFB.png'
import imageTwitter from '../assets/imagens/icontwitter.png'
import imageInstagram from '../assets/imagens/iconinstagram.png'
import imageYt from '../assets/imagens/iconyoutube.png'
import imageGit from '../assets/imagens/icongit.png'
import imageEmail from '../assets/imagens/iconmail.png'
import imagezap from '../assets/imagens/iconzap.png'
import imageCarrinho from '../assets/imagens/Carrinho.svg'


function Rodape() {
  return (
    <>
        {/* carrinho com css interno */}
        <a ><Image id='carrinho' src={imageCarrinho}  style={{marginRight:'15px', cursor:'pointer'}} height={22} width={22} /></a>
        
        {/* aqui seria uma boa ideia criar um novo componente para mostrar se tiver qtde locada ou ocultar se for 0*/}
        <span data-tooltip-content='Carrinho de Locações.' data-tooltip-id='tooltip1' style={{ top:'-4rem', marginRight:'15px', display:"flex", position:'absolute', marginTop:'33px', zIndex:'2',left:'49.6%', backgroundColor:'red', padding:'5px 10px', borderRadius:'60%'}}>2</span>
        
        <h2 className='copy'>Desenvolvido por Silvio Santiago Cacique  <span>© 2023/2023</span></h2>
        
        <h4 className='git'>Pós Graduação Desenvolvimento Full Stack - PucRio - Git
          <img style={{paddingLeft:'10px', mouser:'pointer'}} src={imageGit} height={30} width={30} data-tooltip-content='Nosso respositorio Git' data-tooltip-id='tooltip1' data-tooltip-place='top'/>
        </h4>
        
        {/* icones */}
        <div className='imagens'>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' data-tooltip-content='Nosso FaceBook' data-tooltip-id='tooltip1'>
            <Image src={imageFb} rounded alt='Github' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' data-tooltip-content='Nosso Instagran' data-tooltip-id='tooltip1'>
            <Image src={imageInstagram} rounded />
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noreferrer' data-tooltip-content='Nosso Twitter' data-tooltip-id='tooltip1'>
            <Image src={imageTwitter} rounded />
          </a>
          <a href='https://youtube.com/' target='_blank' rel='noreferrer' data-tooltip-content='Nossos Vídeos no YouTube' data-tooltip-id='tooltip1'>
            <Image src={imageYt} rounded />
          </a>
          <a href='#' target='_blank' rel='noreferrer' data-tooltip-content='Nosso Zap' data-tooltip-id='tooltip1'>
            <Image src={imagezap} rounded />
          </a>
          <a href='#' target='_blank' rel='noreferrer' data-tooltip-content='Nosso endereço de email' data-tooltip-id='tooltip1' > 
            <Image src={imageEmail} rounded />
          </a>
          <Tooltip id='tooltip1'/>

      </div>
    </>
  );
}

export default Rodape;