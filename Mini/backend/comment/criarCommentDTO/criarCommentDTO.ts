// Define e exporta uma classe chamada CreateCommentDto.
// Essa classe será usada para transferir os dados necessários para criar um novo comentário.
export class CreateCommentDto {

  // Campo que armazena o conteúdo do comentário.
  // Espera-se que seja uma string com o texto digitado pelo usuário.
  content: string;

  // Campo que armazena o identificador do usuário que fez o comentário.
  // Espera-se que seja o ID do usuário no formato de string.
  user: string; // ID do usuário

  // Campo que armazena o identificador do vídeo ao qual o comentário pertence.
  // Também espera-se que seja uma string representando o ID do vídeo.
  videoId: string; // ID do vídeo
}
