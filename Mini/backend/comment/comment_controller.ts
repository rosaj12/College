import { Controller, Post, Body } from '@nestjs/common';
import { CommentService } from './comment_service';
import { CriarCommentDto } from './dto/criar_comment_dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly service: CommentService) {}

  @Post()
  comment(@Body() dto: CriarCommentDto) {
    return this.service.comment(dto);
  }
}
