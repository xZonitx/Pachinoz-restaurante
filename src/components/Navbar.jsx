import { useState } from 'react'

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'menu', label: 'Menú' },
  { id: 'pedidos', label: 'Pedidos' },
  { id: 'reservaciones', label: 'Reservaciones' },
  { id: 'sucursales', label: 'Sucursales' },
  { id: 'contacto', label: 'Contacto' },
]

function Navbar({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSelect = (sectionId) => {
    onNavigate(sectionId)
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <nav className="navbar-container" aria-label="Navegación principal">
        <button
          type="button"
          className="navbar-brand"
          onClick={() => handleSelect('inicio')}
        >
          Pachinoz<span>.</span>
        </button>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? 'Cerrar' : 'Menú'}
        </button>

        <ul id="navbar-menu" className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                onClick={() => handleSelect(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
