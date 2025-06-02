// Importa o React (necessário para JSX e componentes).
import React from 'react';

// Importa o ReactDOM para renderizar o React dentro do DOM HTML.
import ReactDOM from 'react-dom/client';

// Importa o componente principal da aplicação.
import App from './App';

// Importa o CSS global da aplicação.
import './index.css';

// Cria a raiz da aplicação React, usando o elemento com ID 'root' definido no public/index.html.
// O ! é o operador "non-null assertion", usado para garantir que o elemento existe.
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Renderiza o componente App dentro da raiz do DOM.
// Envolve com <React.StrictMode> para ativar verificações e alertas de boas práticas em desenvolvimento.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
