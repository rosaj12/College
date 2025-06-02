import { IsString, IsInt } from 'class-validator';

export class CriarCommentDto {
  @IsString()
  content: string;

  @IsInt()
  userId: number;

  @IsInt()
  videoId: number;
}
