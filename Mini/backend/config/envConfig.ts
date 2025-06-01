// Importa todo o conteúdo do módulo 'dotenv' com o alias 'dotenv'.
// Esse módulo é usado para carregar variáveis de ambiente a partir de um arquivo .env.
import * as dotenv from 'dotenv';

// Define e exporta uma função chamada 'loadEnv'.
// Essa função será responsável por carregar e validar as variáveis de ambiente da aplicação.
export function loadEnv() {
  // Executa o método 'config()' do dotenv, que carrega as variáveis definidas no arquivo .env
  // e as insere em 'process.env'.
  dotenv.config();

  // Verifica se a variável de ambiente 'MONGO_URI' está definida.
  // Essa URI é essencial para a conexão com o banco de dados MongoDB.
  if (!process.env.MONGO_URI) {
    // Se 'MONGO_URI' não estiver definida, lança um erro interrompendo a execução da aplicação.
    throw new Error('MONGO_URI is not defined in .env');
  }

  // Retorna um objeto contendo as variáveis de ambiente necessárias,
  // com um valor padrão de 3000 para a porta se 'PORT' não estiver definida.
  return {
    mongoUri: process.env.MONGO_URI,   // URI do MongoDB extraída do .env
    port: process.env.PORT || 3000,    // Porta da aplicação (padrão 3000)
  };
}
