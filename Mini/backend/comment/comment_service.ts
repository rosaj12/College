import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment_entity';
import { CriarCommentDto } from './dto/criar_comment_dto';
import { Video } from '../video/video_entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepo: Repository<Comment>,
    @InjectRepository(Video)
    private videoRepo: Repository<Video>,
  ) {}

  async comment(dto: CriarCommentDto) {
    const video = await this.videoRepo.findOne({ where: { id: dto.videoId } });
    const comment = this.commentRepo.create({
      content: dto.content,
      user: { id: dto.userId },
      video,
    });
    return this.commentRepo.save(comment);
  }
}
