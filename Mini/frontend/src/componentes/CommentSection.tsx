// Importa o React, necessário para usar JSX e componentes funcionais.
import React from 'react';

// Define uma interface de tipos para as props recebidas pelo componente.
interface Props {
  comments: any[]; // Espera um array de comentários (tipado como any[], mas pode ser melhorado depois)
}

// Declara o componente funcional CommentSection com tipagem React.FC e recebe props do tipo Props.
const CommentSection: React.FC<Props> = ({ comments }) => {
  // Se não houver comentários ou o array estiver vazio, retorna null (nada será renderizado).
  if (!comments?.length) return null;

  // Renderiza a lista de comentários.
  return (
    <div style={{ marginTop: 10 }}>
      {/* Título da seção */}
      <h4>Comentários:</h4>

      {/* Lista não ordenada com os comentários */}
      <ul>
        {/* Percorre o array de comentários e renderiza cada um como um item da lista */}
        {comments.map((comment, idx) => (
          <li key={idx}>
            {/* Mostra o nome do usuário (se disponível), ou "Anônimo" como fallback */}
            <b>{comment.user?.name || 'Anônimo'}:</b> {comment.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporta o componente para ser usado em outros arquivos.
export default CommentSection;
