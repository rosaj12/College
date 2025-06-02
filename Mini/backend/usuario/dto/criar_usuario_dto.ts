import { IsString } from 'class-validator';

export class CriarUsuarioDto {
  @IsString()
  name: string;
}
