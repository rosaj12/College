import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuario/usuario_entity';
import { Video } from '../video/video_entity';

@Entity()
export class Reaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'gostei' })
  type: string; // 'gostei', 'amei', 'haha', 'compartilhar', etc.

  @ManyToOne(() => Usuario, (usuario) => usuario.reactions, { eager: true })
  user: Usuario;

  @ManyToOne(() => Video, (video) => video.reactions)
  video: Video;
}
