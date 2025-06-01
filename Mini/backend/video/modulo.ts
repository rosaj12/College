// Importa o decorator @Module do NestJS, usado para definir um módulo.
import { Module } from '@nestjs/common';

// Importa o MongooseModule, que permite integrar o NestJS com MongoDB utilizando Mongoose.
import { MongooseModule } from '@nestjs/mongoose';

// Importa o modelo (classe) e o schema da entidade Video.
import { Video, VideoSchema } from './schema';

// Importa o serviço responsável pela lógica de negócio da entidade Video.
import { VideoService } from './service';

// Importa o controller que expõe rotas HTTP relacionadas aos vídeos.
import { VideoController } from './controlador';

// Declara o módulo VideoModule, responsável por agrupar o schema, o serviço e o controller de vídeos.
@Module({
  // Importa e registra o schema Video no contexto do Mongoose, permitindo usar Model<Video>.
  imports: [MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }])],

  // Define os serviços (providers) que pertencem a este módulo.
  providers: [VideoService],

  // Define os controllers responsáveis por tratar as rotas relacionadas a vídeos.
  controllers: [VideoController],

  // Exporta o serviço VideoService para que possa ser utilizado em outros módulos (ex: ReactionModule, CommentModule).
  exports: [VideoService]
})

// Exporta a classe VideoModule para ser usada no AppModule ou em outros contextos da aplicação.
export class VideoModule {}
