import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './video_entity';
import { VideoService } from './video_service';
import { VideoController } from './video_controller';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  providers: [VideoService],
  controllers: [VideoController],
})
export class VideoModule {}
