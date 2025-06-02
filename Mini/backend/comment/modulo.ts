// Importa o decorator @Module do NestJS para definir um módulo.
import { Module } from '@nestjs/common';

// Importa o módulo do Mongoose que permite a integração entre NestJS e MongoDB.
import { MongooseModule } from '@nestjs/mongoose';

// Importa o modelo e o schema do comentário que será registrado no banco de dados.
import { Comment, CommentSchema } from './schema';

// Importa o serviço responsável pela lógica de negócios dos comentários.
import { CommentService } from './service';

// Importa o controller que expõe os endpoints HTTP para manipular comentários.
import { CommentController } from './controlador';

// Importa o modelo e o schema do vídeo, necessário para referenciar os comentários ao vídeo correspondente.
import { Video, VideoSchema } from '../video/schema';

// Define o módulo CommentModule com suas dependências e configurações.
@Module({
  // Define os módulos que serão importados.
  imports: [
    // Registra o schema de Comment no Mongoose para poder usar injeção de dependência com o Model<Comment>.
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),

    // Registra o schema de Video também, pois será necessário no serviço de comentários para referenciar vídeos.
    MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }])
  ],

  // Define os provedores (serviços) que fazem parte deste módulo.
  providers: [CommentService],

  // Define os controllers que expõem rotas relacionadas a este módulo.
  controllers: [CommentController]
})

// Exporta a classe CommentModule para ser usada no app.module.ts ou outros módulos.
export class CommentModule {}
