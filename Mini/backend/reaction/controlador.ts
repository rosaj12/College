// Importa os decorators necessários do NestJS:
// - @Controller: define uma classe como um controller que lida com requisições HTTP.
// - @Post: define que o método será chamado com requisições HTTP POST.
// - @Body: extrai o corpo da requisição e o transforma no DTO especificado.
import { Controller, Post, Body } from '@nestjs/common';

// Importa o serviço que contém a lógica de negócios relacionada às reações (likes, etc.).
import { ReactionService } from './service';

// Importa o DTO que define a estrutura dos dados esperados no corpo da requisição para criar uma reação.
import { CreateReactionDto } from './criarReactionDTO/criarReactionDTO';

// Define a classe como um controller do NestJS para rotas que começam com '/reaction'.
@Controller('reaction')
export class ReactionController {
  
  // Injeta uma instância do serviço ReactionService via o construtor da classe.
  constructor(private readonly reactionService: ReactionService) {}

  // Define o método react() como manipulador de requisições POST para a rota '/reaction'.
  @Post()
  react(@Body() dto: CreateReactionDto) {
    // Chama o método reactToVideo() do serviço passando os dados do DTO.
    // Retorna a reação criada (ou o resultado da lógica definida no service).
    return this.reactionService.reactToVideo(dto);
  }
}
