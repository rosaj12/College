// Define e exporta a classe CreateVideoDto.
// Essa classe será usada como DTO (Data Transfer Object) para transferência de dados
// ao criar um novo vídeo no sistema.
export class CreateVideoDto {

  // Campo que representa o título do vídeo.
  // Espera-se que seja uma string fornecida pelo usuário.
  title: string;

  // Campo que representa o ID do dono (usuário) do vídeo.
  // Esse valor deve ser um identificador válido de um usuário já registrado.
  owner: string; // User ID
}
