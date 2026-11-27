import { useState } from 'react'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Menu from './components/Menu'
import Pedidos from './components/Pedidos'
import Reservaciones from './components/Reservaciones'
import Sucursales from './components/Sucursales'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const SECTIONS = {
  inicio: Inicio,
  menu: Menu,
  pedidos: Pedidos,
  reservaciones: Reservaciones,
  sucursales: Sucursales,
  contacto: Contacto,
}

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const ActiveComponent = SECTIONS[activeSection] || Inicio

  return (
    <div className="app-layout">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="main-content">
        <ActiveComponent />
      </main>

      <Footer />
    </div>
  )
}

export default App
