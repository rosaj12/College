// Importa o decorator @Module do NestJS, necessário para declarar o módulo principal da aplicação.
import { Module } from '@nestjs/common';

// Importa o módulo MongooseModule para integrar o NestJS com o banco de dados MongoDB.
import { MongooseModule } from '@nestjs/mongoose';

// Importa os módulos internos da aplicação, responsáveis por diferentes funcionalidades.
import { UserModule } from './usuario/modulo';         // Módulo de usuários
import { VideoModule } from './video/modulo';       // Módulo de vídeos
import { ReactionModule } from './reaction/modulo'; // Módulo de reações
import { CommentModule } from './comment/modulo';     // Módulo de comentários

// Define o módulo principal da aplicação NestJS.
@Module({
  // Define os módulos que serão importados e utilizados dentro da aplicação.
  imports: [
    // Conecta a aplicação ao MongoDB utilizando Mongoose.
    // A URI usada aqui é local: mongodb://localhost:27017/mini-tiktok
    MongooseModule.forRoot('mongodb://localhost:27017/mini-tiktok'),

    // Importa os módulos internos da aplicação.
    UserModule,      // Responsável pela lógica de usuários
    VideoModule,     // Responsável pelos vídeos
    ReactionModule,  // Responsável pelas reações aos vídeos
    CommentModule,   // Responsável pelos comentários
  ],
})
// Exporta a classe AppModule, que é carregada automaticamente no bootstrap da aplicação.
export class AppModule {}
