// Importa os decorators e funções necessárias do NestJS.
// @Controller: Define a classe como um controller de rotas.
// @Post: Define o método HTTP POST.
// @Body: Extrai o corpo da requisição.
import { Controller, Post, Body } from '@nestjs/common';

// Importa o serviço que lida com a lógica de negócios dos comentários.
import { CommentService } from './service';

// Importa o DTO (Data Transfer Object) usado para criar um novo comentário.
import { CreateCommentDto } from './criarCommentDTO/criarCommentDTO';

// Define que esta classe será um controller responsável pelo endpoint '/comment'.
@Controller('comment')
export class CommentController {

  // Injeta automaticamente o CommentService na classe por meio do construtor.
  // Assim, o controller pode delegar a lógica de negócios para o serviço.
  constructor(private readonly commentService: CommentService) {}

  // Define um endpoint HTTP POST na rota '/comment'.
  // Este método será chamado quando uma requisição POST for feita para '/comment'.
  @Post()
  comment(@Body() dto: CreateCommentDto) {
    // Chama o método 'commentOnVideo' do serviço, passando o DTO com os dados do comentário.
    // O retorno dessa função será enviado como resposta HTTP.
    return this.commentService.commentOnVideo(dto);
  }
}
