// Define e exporta uma classe chamada CreateReactionDto.
// Essa classe será usada como Data Transfer Object (DTO) para transferir os dados necessários
// quando um usuário quiser adicionar uma reação (como "gostei") a um vídeo.
export class CreateReactionDto {

  // Campo que representa o tipo de reação feita pelo usuário.
  // Exemplos: "gostei", "amei", "haha", "compartilhar"
  type: string; // Ex: "gostei", "amei"

  // Campo que representa o identificador único do usuário que fez a reação.
  // Normalmente é o ID armazenado no banco de dados (como ObjectId no MongoDB).
  user: string; // ID do usuário

  // Campo que representa o identificador único do vídeo que recebeu a reação.
  // Usado para associar a reação ao vídeo correspondente.
  videoId: string; // ID do vídeo
}
