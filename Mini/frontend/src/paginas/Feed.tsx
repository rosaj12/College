// Importa React, o hook useEffect (efeitos colaterais) e useState (estado local).
import React, { useEffect, useState } from 'react';

// Importa a função getVideos do serviço de API, que retorna os vídeos do backend.
import { getVideos } from '../services/api';

// Importa o componente VideoCard, que renderiza individualmente cada vídeo.
import VideoCard from '../componentes/VideoCard';

// Define o componente funcional Feed, sem props, usando React.FC.
const Feed: React.FC = () => {
  // Cria um estado local 'videos' para armazenar o array de vídeos recebidos da API.
  const [videos, setVideos] = useState<any[]>([]);

  // useEffect executa quando o componente é montado (equivalente ao componentDidMount).
  useEffect(() => {
    // Função assíncrona que busca os vídeos da API.
    const fetchVideos = async () => {
      const res = await getVideos(); // Chamada à API
      setVideos(res.data);           // Armazena os vídeos no estado
    };
    fetchVideos(); // Executa a função
  }, []); // Array de dependência vazio: executa apenas uma vez após o primeiro render

  // Retorna o layout do feed: uma lista de VideoCards.
  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      {/* Mapeia os vídeos recebidos da API e renderiza um VideoCard para cada um. */}
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

// Exporta o componente Feed para ser usado na aplicação (ex: em App.tsx).
export default Feed;
