// Importa o React para usar JSX e componentes funcionais.
import React from 'react';

// Importa o componente de página Feed, que exibe a lista de vídeos.
import Feed from './paginas/Feed';

// Define o componente principal da aplicação.
function App() {
  return (
    <div>
      {/* Título da aplicação centralizado */}
      <h1 style={{ textAlign: 'center' }}>🎵 MiniTikTok 🎥</h1>

      {/* Componente Feed que carrega todos os vídeos do backend */}
      <Feed />
    </div>
  );
}

// Exporta o componente App para ser usado em index.tsx (ponto de entrada da aplicação React).
export default App;
