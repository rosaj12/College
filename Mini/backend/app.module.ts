import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm_config';

import { UsuarioModule } from '../usuario/usuario_module';
import { VideoModule } from '../video/video_module';
import { CommentModule } from '../comment/comment_module';
import { ReactionModule } from '../reaction/reaction_module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsuarioModule,
    VideoModule,
    CommentModule,
    ReactionModule,
  ],
})
export class AppModule {}
