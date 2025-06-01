// Importa o decorator @Module do NestJS, necessário para definir um módulo.
import { Module } from '@nestjs/common';

// Importa o MongooseModule para integrar o NestJS com o banco de dados MongoDB usando Mongoose.
import { MongooseModule } from '@nestjs/mongoose';

// Importa o modelo e o schema da entidade Reaction (reação), que representa uma reação de usuário a um vídeo.
import { Reaction, ReactionSchema } from './schema';

// Importa o serviço que contém a lógica de negócios relacionada às reações.
import { ReactionService } from './service';

// Importa o controller que trata das rotas HTTP relacionadas às reações.
import { ReactionController } from './controlador';

// Importa o modelo e o schema da entidade Video, pois as reações são associadas a vídeos.
import { Video, VideoSchema } from '../video/schema';

// Define o módulo ReactionModule com suas dependências, provedores e controllers.
@Module({
  // Define os módulos que este módulo importa.
  imports: [
    // Registra o schema de Reaction para que ele possa ser injetado como um Model<Reaction> nos serviços.
    MongooseModule.forFeature([{ name: Reaction.name, schema: ReactionSchema }]),

    // Também registra o schema de Video, pois será necessário no serviço para atualizar vídeos com reações.
    MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }])
  ],

  // Define os provedores (services) disponíveis neste módulo.
  providers: [ReactionService],

  // Define os controllers responsáveis pelas rotas associadas a este módulo.
  controllers: [ReactionController]
})

// Exporta a classe ReactionModule para que ela possa ser usada em outros lugares, como no AppModule.
export class ReactionModule {}
