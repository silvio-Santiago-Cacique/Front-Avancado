{/* Componente de Cadastro de usuários*/}

import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import "../assets/css/Formulario.css";
import Rodape from "../components/Rodape";
import BotaoVoltar from "../components/BotaoVoltar";

function Form() {

   {/* Uso de estados para controle dos itens do form*/}
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [news, setNews] = useState(true);
  const [promotions, setPromotions] = useState(true);

  const [PasswordError, setCPasswordError] = useState(false);

  return (
    <div >
      <Container maxWidth="sm" component="article" className="form" >
        <h1>Formulário de Cadastro de <span>Usuários</span></h1>
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <TextField
            id="name"
            label="Nome"
            variant="outlined"
            margin="dense"
            fullWidth
            value={name}
            onChange={(event) => {setName(event.target.value)}}
          />
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            margin="dense"
            fullWidth
            value={email}
            onChange={(event) => {setEmail(event.target.value)}}
          />
          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            margin="dense"
            fullWidth
            error={PasswordError}
            helperText={PasswordError && "Deve conter 8 dígitos. Insira apenas os números."}
            value={password}
            onBlur={(event) => {
              const tmpPassword = event.target.value;

              if (tmpPassword.length !== 11) {
                setCPasswordError(true);
              } else {
                setCPasswordError(false);
              }
            }}
            onChange={(event) => {
              const tmpPassword = event.target.value;

              if (tmpPassword.length === 11) {
                setPasswordError(false);
              }

              setPassword(event.target.value)}
            }
          />

          <div className="checkboxes">
            <FormControlLabel
              control={
                <Checkbox
                  value="Admin"
                  color="primary"
                  name="Admin"
                  checked={promotions}
                  onChange={(event) => {
                    setPromotions(event.target.checked);
                  }}
                />
              }
              label="Administrador"
            />

            
          </div>

          <Button className="btn-form" variant="contained" color="primary">
            Cadastrar
          </Button>
        </form>
        <BotaoVoltar/>
        
        <p>{name} </p>
        
      </Container>
      <section className="main" >
        <Rodape />
      </section>
    </div>
  );
}

export default Form;