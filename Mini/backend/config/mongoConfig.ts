// Importa o módulo MongooseModule do NestJS para habilitar a integração com MongoDB via Mongoose.
import { MongooseModule } from '@nestjs/mongoose';

// Exporta uma constante chamada MongoConnection.
// Essa constante utiliza o método forRootAsync para configurar a conexão com o MongoDB de forma assíncrona.
export const MongoConnection = MongooseModule.forRootAsync({
  // useFactory define uma função de fábrica assíncrona que retorna as opções de configuração.
  useFactory: async () => ({
    // Define o URI de conexão com o banco de dados MongoDB.
    // Primeiro tenta usar a variável de ambiente MONGO_URI (carregada pelo dotenv, por exemplo).
    // Se não existir, usa uma URI padrão que conecta ao MongoDB local na base "mini-tiktok".
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/mini-tiktok',
  }),
});
