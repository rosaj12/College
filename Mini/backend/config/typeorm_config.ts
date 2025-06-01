import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Usuario } from '../usuario/usuario_entity';
import { Video } from '../video/video_entity';
import { Reaction } from '../reaction/reaction_entity';
import { Comment } from '../comment/comment_entity';
import { config as loadEnv } from 'dotenv';

loadEnv(); // carrega variáveis do .env

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'mini_tiktok',
  entities: [Usuario, Video, Reaction, Comment],
  synchronize: true,
};
