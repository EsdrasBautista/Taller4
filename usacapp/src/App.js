import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import BarraNav from './componentes/BarraNav';
import PaginaP from './componentes/PaginaP';
import Perfil from './componentes/Perfil';
import Testimonios from './componentes/Testimonios';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BarraNav />}>
          <Route index element={<PaginaP />} />
          <Route path="Perfil" element={<Perfil />} />
          <Route path="opiniones" element={<Testimonios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
