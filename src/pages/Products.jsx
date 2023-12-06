{/* Componente de produtos, encarregado de fazer a conexão com a api, carregar os dados e repassá-los para o componente Item */}
import { useEffect, useState } from "react"
import Item from "../components/Item"
import axios from 'axios'
import Rodape from "../components/Rodape"
import BotaoVoltar from "../components/BotaoVoltar"

export default function Autos() {
  const [autoList, setAutosList] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:5001/veiculos')
      .then(res => setAutosList(res.data.veiculos))
      .catch(error => console.log(error))
  }, [])

  return (
      <div className="content-auto" >
        <section className="main-autos" style={{display:"flex", justifyContent:"center"}}>
          {autoList.map((p, index) => (
            <Item key={index} auto={p} />
          ))}
          
        </section>
        {/* Componente de BotaoVoltar para retornar ao componente principal.jsx*/}
        <section style={{display:"flex", position:"absolute",marginBottom:0, minWidth:'200px', top:'53%', left:'40%'}}> 
          <BotaoVoltar/>
        </section>
        {/* Componente de Rodape*/}
        <section className="main" >
          <Rodape/> 
        </section>
      </div>
  )
}
