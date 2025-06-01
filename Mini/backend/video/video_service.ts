import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from './video_entity';
import { Repository } from 'typeorm';
import { CriarVideoDto } from './dto/criar_video_dto';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private repo: Repository<Video>,
  ) {}

  create(dto: CriarVideoDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find({ relations: ['reactions', 'comments'] });
  }

  findById(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['reactions', 'comments'] });
  }
}
