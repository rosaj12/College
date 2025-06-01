export class CriarReactionDto {
  type: string;    // 'gostei', 'amei', 'haha', etc.
  userId: number;
  videoId: number;
}
