import './App.css';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Función principal de la aplicación
function App() {
  // Estado para almacenar el usuario (puedes eliminar este estado si ya no es necesario)
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para el componente Form */}
        <Route index element={<Form />}></Route>

        {/* Rutas para los archivos HTML */}
        <Route path='/form' element={<iframe src="./form.html" title="Formulario" style={{ width: '100%', height: '100vh', border: 'none' }}></iframe>} />
        <Route path='/calentadores' element={<iframe src="./calentadores.html" title="Calentadores" style={{ width: '100%', height: '100vh', border: 'none' }}></iframe>} />
        <Route path='/instalaciones' element={<iframe src="./instalaciones.html" title="Instalaciones" style={{ width: '100%', height: '100vh', border: 'none' }}></iframe>} />
        <Route path='/servicios' element={<iframe src="./servicios.html" title="Servicios" style={{ width: '100%', height: '100vh', border: 'none' }}></iframe>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
