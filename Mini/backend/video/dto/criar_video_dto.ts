import { IsString, IsInt } from 'class-validator';

export class CriarVideoDto {
  @IsString()
  title: string;

  @IsInt()
  ownerId: number; // ID do usuário dono do vídeo
}
