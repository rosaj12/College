import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { VideoService } from './video_service';
import { CriarVideoDto } from './dto/criar_video_dto';

@Controller('video')
export class VideoController {
  constructor(private readonly service: VideoService) {}

  @Post()
  create(@Body() dto: CriarVideoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }
}
