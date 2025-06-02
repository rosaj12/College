// Importa os decorators do NestJS:
// - @Controller para declarar a classe como controller de rotas.
// - @Get e @Post para definir os métodos HTTP.
// - @Body e @Param para extrair dados da requisição.
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

// Importa o serviço responsável pela lógica de negócio relacionada a vídeos.
import { VideoService } from './service';

// Importa o DTO que define os dados necessários para criar um vídeo.
import { CreateVideoDto } from './criarVideoDTO/criarVideoDTO';

// Define que esta classe lida com rotas baseadas em '/video'.
@Controller('video')
export class VideoController {

  // Injeta o serviço VideoService para ser utilizado dentro do controller.
  constructor(private readonly videoService: VideoService) {}

  // Define o endpoint POST '/video'.
  // Esse método será acionado quando um cliente fizer um POST para criar um novo vídeo.
  @Post()
  create(@Body() dto: CreateVideoDto) {
    // Chama o método create() do serviço passando os dados do DTO.
    return this.videoService.create(dto);
  }

  // Define o endpoint GET '/video'.
  // Esse método retorna todos os vídeos cadastrados.
  @Get()
  findAll() {
    // Chama o método findAll() do serviço para buscar todos os vídeos.
    return this.videoService.findAll();
  }

  // Define o endpoint GET '/video/:id'.
  // Esse método busca um vídeo específico com base no ID fornecido na URL.
  @Get(':id')
  findById(@Param('id') id: string) {
    // Chama o método findById() do serviço passando o ID do vídeo.
    return this.videoService.findById(id);
  }
}
