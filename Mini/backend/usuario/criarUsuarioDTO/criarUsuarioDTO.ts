// Importa os decorators de validação da biblioteca 'class-validator'.
// Eles serão usados para garantir que os dados recebidos estejam corretos.
import { IsString, IsNotEmpty } from 'class-validator';

// Define e exporta a classe CreateUserDto.
// Esta classe será usada para validar e transferir os dados ao criar um novo usuário.
export class CreateUserDto {

  // Aplica validações ao campo "name":

  @IsString() // Garante que o valor recebido seja do tipo string.
  @IsNotEmpty() // Garante que o valor não seja uma string vazia, null ou undefined.

  // Campo que representa o nome do usuário.
  name: string;
}
