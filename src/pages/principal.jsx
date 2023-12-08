
{/* Componente principal, encarregado de chamar os demais componentes do projeto*/}
import { cloneElement, useEffect, useState } from "react"
import { Link, Menu } from "@mui/material";
import './Products'
import NavigationBar from "../components/Menu.jsx";
import CardCustom from "../components/Card.jsx";
import Rodape from "../components/Rodape.jsx";



function PgPrincipal(props) {
 
  {/*mostrar outra forma de estilo, inseridos diretamente dentro do codigo jsx.*/}
    
  const [url, seturl] = useState('/');
  return (
    
      <div style={{ 
                  padding:'0px',
                  textAlign:'center',
                  marginBottom :'0px',
                  position:'relative' }}>
        <NavigationBar/>
        <h3 style={{ width: '100%',
                      padding:'5px',
                      textAlign:'center',
                      marginBottom :'5px', }}
                      >Bem vindos ao serviço de locações de veículos 
        <a style={{textDecoration: 'none'}} href="about">
            <span style={{color: 'Blue',
                        backgroundColor:'#DCDCDC',
                        borderRadius:'5px',
                        marginLeft:'10px',
                        padding:'5px 15px',
                        textAlign:'center',
                        mouse:'pointer'
                        }}>LocaBemCars</span>
        </a>
        
        </h3>
        <div style={{   width:'auto', 
                        display: 'flex',
                        flex: 'wrap',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        textAlign: 'center',
                        alignItems: 'center'
                  }}>
            {/* Componente de Cards personalizado, com links para chamar outros componentes do projeto*/}
            <CardCustom linkbtn='/produtos'  title="Pagina de Veiculos" bgcolor='#9b4d3d' color="#f6f7f7" corpo="permite acessar as funcionalidades referentes a veiculos" img='../assets/imagens/user.png'/>
            <CardCustom linkbtn='/clientes' title="Pagina de Clientes" bgcolor='#74a1ad' color="#f6f7f7" corpo="permite acessar as funcionalidades referentes a Clientes"/>
            <CardCustom linkbtn='/notFound'title="Outras ..." bgcolor='grey' color="black" corpo="permite acessar outras funcionalidades a serem desenvolvidas"/>
            <CardCustom linkbtn='/usuario' title="Pagina de Usuários" bgcolor='#74a1ad' color="#f6f7f7" corpo="permite acessar as funcionalidades referentes a Usuários"/>
        </div>
        <section className="main" >
          <Rodape />
        </section>
      </div>   
    );
  }
  
  export default PgPrincipal;




