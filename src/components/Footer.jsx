const INTEGRANTES = [
  'Yara Susana Vera Godinez',
  'Laura Alejandra Santana Martinez',
  'Moisés Alejandro Fernández Hernández',
  'Cesar Emanuel Hernandez Perez',
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-block">
          <h2>Pachinoz</h2>
          <p>
            Proyecto web modular desarrollado con React y Vite para la gestión y presentación del restaurante Pachinoz.
          </p>
        </div>

        <div className="footer-block">
          <h3>Integrantes</h3>
          <ul className="footer-members">
            {INTEGRANTES.map((nombre) => (
              <li key={nombre}>{nombre}</li>
            ))}
          </ul>
        </div>

        <div className="footer-block">
          <h3>Información Académica</h3>
          <div className="footer-meta">
            <p>
              <strong>Materia:</strong> Desarrollo de Aplicaciones Web en la Nube y Móviles
            </p>
            <p>
              <strong>Profesor:</strong> Mtro. Zeus Cobián
            </p>
            <p>
              <strong>Calendario:</strong> 2026-B
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Pachinoz — Proyecto Final</p>
      </div>
    </footer>
  )
}

export default Footer
