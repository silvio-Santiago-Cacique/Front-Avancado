#Front-end em React **Projeto MVP Locação de Veículos**

Este é um pequeno projeto para conclusão do *módulo III (Front-End Avançado)*, referente ao *Pós-graduação em Desenvolvimento Full Stack pela PUC Rio*.

O objetivo deste projeto é desenvolver um MVP que aplique os conhecimentos de **prototipagem e componentização**.

O MVP aplica os fundamentos da biblioteca React e utiliza os conceitos e metodologia de componentização. Ainda será utilizado o Figma para prototipar o esqueleto e o design em alta fidelidade, os quais serviram de base para o desenvolvimento Front-end em react.  Optou-se prioritariamente, neste projeto, pelo uso de arquivos jsx devido sua melhor integração dos elementos e linguagens, como **nodejs, javascritp e React**, selecionados para o projeto.

O front-end terá como back-end o MVP desenvolvido nos módulos I e II, especialmente para essa demonstração - a API de Veiculos-,  e os codígos estão disponíveis no repositório Git: *https://github.com/silvio-Santiago-Cacique/mvp-api-veiculos*. O Principal objetivo é desenvolver um SPA que demonstre o poder da **reusabilidade e escalabilidade de componentes** intra e inter páginas, integradas a API's internas e externas.


## Como executar

Será necessário ter o [Nodejs, e o npm ou outro gerenciador de pacotes](https://nodejs.org/en/download/) instalado. 

Após clonar ou baixar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```
Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.


```
$ npm start
```
Para executar a interface gráfica do usuário.


Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.


**Observações:**
1. Antes de utilizar o comando acima, deve-se ter certeza que a ***API Veículos*** esteja executando no ***localhost***, na ***porta 5001***. Para isto veja o README.MD específico da API mensionada, no link do repositório Git:
https://github.com/silvio-Santiago-Cacique/mvp-api-veiculos.

2. Este projeto utilizou o Figma para o design do esqueleto (**wireframe - esqueleto**) e o em alta fidelidade (**Pagina principal**), além de disponibilizar uma página de componentização (**Assets/local components**). A pagina de alta fidelidade explora os conceitos de componentização e as interaçoes entre os componentes, os quais fornecem uma boa ideia das interações do projeto real. Segue o link para acessar o projeto pelo Figma: 
https://www.figma.com/file/9LTmZjkHeviIFcOr3Vgizb/Coherent-Design-System-(Community)?type=design&node-id=2602%3A156&mode=design&t=T9XBcJlzribDpXGl-1.
- Para executar o projeto no Figma, abra o link acima, mantenha o foco na pagina principal de alta fidelidade e click em Present ou Preview, no menu superior, canto direito. As interações não foram utilizadas para todos os componentes e objetos do projeto, mas somentes naqueles elegíveis, que pudessem demostrar os objetivos do projeto.

3. Este projeto pode ser clonado pelo repositório Git:
https://github.com/silvio-Santiago-Cacique/MVP-Front-Avancado

4. O projeto ainda, procurou aplicar uma organização da estrutura de pastas que possa auxiliar na manutenção facilitada da aplicação.

5. Foi disponibilizado, mas ainda não implantado neste projeto, um estrutura de autenticação de usuários (pastas services e Autenticacao), afim de estimular sua aplicabilidade futura.


