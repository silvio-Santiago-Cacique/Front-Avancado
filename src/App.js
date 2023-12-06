import Products from './pages/Products'
import NavigationBar from './components/Menu'
import PgPrincipal from './pages/principal'
import CadastroUsuario from './pages/cadastroUsuario'
import About from './pages/about'
import Clientes from './pages/clientes'

import { SwitchRoutes, Routes, Route, Outlet, Link } from "react-router-dom";
import './assets/css/Menu.css'


export default function App() {
  return (
    <div>
        {/* definção das rotas*/}
        <NavigationBar/>
        <Routes >
          <Route path="/" element={<PgPrincipal/>} />
            <Route index element={<PgPrincipal />} />
          <Route path="about" element={<About />} />
          <Route path="usuario" element={<CadastroUsuario />} />
          <Route path="produtos" element={<Products />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="*" element={<notFound />} />
        </Routes>
    </div>
  )
}

