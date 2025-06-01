import { Controller, Post, Body } from '@nestjs/common';
import { ReactionService } from './reaction_service';
import { CriarReactionDto } from './dto/criar_reaction_dto';

@Controller('reaction')
export class ReactionController {
  constructor(private readonly service: ReactionService) {}

  @Post()
  react(@Body() dto: CriarReactionDto) {
    return this.service.react(dto);
  }
}
