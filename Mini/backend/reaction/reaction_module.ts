import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reaction } from './reaction_entity';
import { ReactionService } from './reaction_service';
import { ReactionController } from './reaction_controller';
import { Video } from '../video/video_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reaction, Video])],
  providers: [ReactionService],
  controllers: [ReactionController],
})
export class ReactionModule {}
