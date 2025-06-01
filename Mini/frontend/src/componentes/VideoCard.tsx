// Importa React e o hook useState para gerenciar estados locais.
import React, { useState } from 'react';

// Importa funções da API para curtir e comentar vídeos.
import { postLike, postComment } from '../services/api';

// Importa o componente que renderiza a seção de comentários.
import CommentSection from './CommentSection';

// Define a interface das props esperadas, contendo um objeto de vídeo.
// Aqui está tipado como "any", mas pode ser melhorado com uma interface.
interface Props {
  video: any;
}

// Define o componente funcional VideoCard, tipado como React.FC<Props>.
const VideoCard: React.FC<Props> = ({ video }) => {

  // Define o estado 'comment' para armazenar o texto digitado no input de comentário.
  const [comment, setComment] = useState('');

  // Simula o ID do usuário que realizou a ação (para testes).
  // Neste exemplo, está pegando o dono do vídeo como autor da reação.
  const userId = video.owner?._id;

  // Função para lidar com o clique no botão de curtir.
  const handleLike = async () => {
    // Envia a reação para a API.
    await postLike(video._id, userId);

    // Recarrega a página para refletir as mudanças (reação adicionada).
    window.location.reload();
  };

  // Função para lidar com o envio de um comentário.
  const handleComment = async () => {
    // Só envia se o comentário não estiver vazio ou só com espaços.
    if (comment.trim()) {
      // Envia o comentário para a API.
      await postComment(video._id, userId, comment);

      // Limpa o campo de texto após enviar.
      setComment('');

      // Recarrega a página para mostrar o novo comentário.
      window.location.reload();
    }
  };

  // JSX retornado pelo componente.
  return (
    <div style={{ border: '1px solid gray', borderRadius: 8, padding: 16, marginBottom: 20 }}>
      {/* Título do vídeo */}
      <h3>{video.title}</h3>

      {/* Nome do autor do vídeo (se houver), ou "Anônimo" */}
      <p><b>Por:</b> {video.owner?.name || 'Anônimo'}</p>

      {/* Botão de curtir com contador de reações */}
      <button onClick={handleLike}>Curtir ({video.reactions.length})</button>

      {/* Campo de comentário e botão para enviar */}
      <div style={{ marginTop: 10 }}>
        <input
          placeholder="Comente aqui..."
          value={comment}
          onChange={(e) => setComment(e.target.value)} // Atualiza o estado do comentário
        />
        <button onClick={handleComment}>Comentar</button>
      </div>

      {/* Seção de comentários renderizada com base nos comentários do vídeo */}
      <CommentSection comments={video.comments} />
    </div>
  );
};

// Exporta o componente para ser utilizado em outros lugares (como o Feed).
export default VideoCard;
