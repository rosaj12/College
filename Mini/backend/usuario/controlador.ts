// Importa os decorators e utilitários do NestJS:
// - @Controller define a classe como um controller de rotas.
// - @Get e @Post são usados para definir os métodos HTTP.
// - @Body extrai os dados do corpo da requisição.
// - @Param extrai parâmetros da URL.
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

// Importa o serviço que contém a lógica de negócios relacionada a usuários.
import { UserService } from './service';

// Importa o DTO que define os dados esperados para criação de um novo usuário.
import { CreateUserDto } from './criarUsuarioDTO/criarUsuarioDTO';

// Define que esta classe trata requisições para a rota base '/user'.
@Controller('user')
export class UserController {

  // Injeta o serviço UserService através do construtor para ser usado nos métodos do controller.
  constructor(private readonly userService: UserService) {}

  // Define um endpoint POST para '/user'.
  // Esse método é chamado quando o cliente envia dados para criar um novo usuário.
  @Post()
  create(@Body() dto: CreateUserDto) {
    // Chama o método create() do serviço passando os dados do DTO.
    return this.userService.create(dto);
  }

  // Define um endpoint GET para '/user'.
  // Esse método retorna todos os usuários registrados.
  @Get()
  findAll() {
    // Chama o método findAll() do serviço que retorna a lista de usuários.
    return this.userService.findAll();
  }

  // Define um endpoint GET para '/user/:id'.
  // Esse método busca um usuário específico com base no ID fornecido na URL.
  @Get(':id')
  findById(@Param('id') id: string) {
    // Chama o método findById() do serviço, passando o ID do usuário.
    return this.userService.findById(id);
  }
}
