import * as dotenv from 'dotenv';

export function carregarVariaveisAmbiente() {
  dotenv.config();

  if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_NAME) {
    throw new Error('Variáveis de ambiente do banco de dados não estão definidas corretamente.');
  }
}
