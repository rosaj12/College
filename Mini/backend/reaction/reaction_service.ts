import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reaction } from './reaction_entity';
import { CriarReactionDto } from './dto/criar_reaction_dto';
import { Video } from '../video/video_entity';

@Injectable()
export class ReactionService {
  constructor(
    @InjectRepository(Reaction)
    private reactionRepo: Repository<Reaction>,
    @InjectRepository(Video)
    private videoRepo: Repository<Video>,
  ) {}

  async react(dto: CriarReactionDto) {
    const video = await this.videoRepo.findOne({ where: { id: dto.videoId } });
    const reaction = this.reactionRepo.create({
      type: dto.type,
      user: { id: dto.userId },
      video,
    });
    return this.reactionRepo.save(reaction);
  }
}
