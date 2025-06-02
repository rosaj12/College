// Importa a função NestFactory do NestJS, usada para criar a instância da aplicação.
import { NestFactory } from '@nestjs/core';

// Importa o módulo principal da aplicação (onde tudo está registrado).
import { AppModule } from './appModulo';

// Função assíncrona bootstrap, responsável por iniciar a aplicação NestJS.
async function bootstrap() {
  // Cria uma instância da aplicação baseada no AppModule.
  const app = await NestFactory.create(AppModule);

  // Habilita CORS (Cross-Origin Resource Sharing).
  // Isso permite que um frontend (como React ou Angular) acesse a API a partir de outro domínio ou porta.
  app.enableCors();

  // Inicia o servidor HTTP na porta 3000.
  await app.listen(3000);
}

// Chama a função bootstrap para iniciar a aplicação.
bootstrap();
