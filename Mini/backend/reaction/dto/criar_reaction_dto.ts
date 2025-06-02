import { IsString, IsInt } from 'class-validator';

export class CriarReactionDto {
  @IsString()
  type: string;

  @IsInt()
  userId: number;

  @IsInt()
  videoId: number;
}
