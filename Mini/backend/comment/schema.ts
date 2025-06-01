// Importa o decorator @Module para definir o módulo no NestJS.
import { Module } from '@nestjs/common';

// Importa o MongooseModule para habilitar a integração com o MongoDB.
import { MongooseModule } from '@nestjs/mongoose';

// Importa o modelo e schema da entidade Reaction (reação), que será persistida no MongoDB.
import { Reaction, ReactionSchema } from './schema';

// Importa o serviço ReactionService que conterá a lógica de negócios das reações.
import { ReactionService } from './service';

// Importa o controller ReactionController, responsável pelos endpoints HTTP relacionados a reações.
import { ReactionController } from './controlador';

// Importa o modelo e schema da entidade Video, que será referenciado pelas reações.
import { Video, VideoSchema } from '../video/schema';

// Define o módulo ReactionModule com suas dependências e configurações.
@Module({
  // Lista os módulos que este módulo importa.
  imports: [
    // Registra o schema da entidade Reaction no contexto do Mongoose para injeção do Model<Reaction>.
    MongooseModule.forFeature([{ name: Reaction.name, schema: ReactionSchema }]),

    // Registra o schema de Video, já que o serviço de reações pode precisar validar ou interagir com vídeos.
    MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }])
  ],

  // Define os provedores (serviços) deste módulo.
  providers: [ReactionService],

  // Define os controllers que tratarão requisições HTTP deste módulo.
  controllers: [ReactionController]
})

// Exporta a classe ReactionModule para ser utilizada no AppModule ou por outros módulos.
export class ReactionModule {}
