import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment_entity';
import { CommentService } from './comment_service';
import { CommentController } from './comment_controller';
import { Video } from '../video/video_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Video])],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
