import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuario_service';
import { CriarUsuarioDto } from './dto/criar_usuario_dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private service: UsuarioService) {}

  @Post()
  create(@Body() dto: CriarUsuarioDto) {
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
