import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuario/usuario_entity';
import { Video } from '../video/video_entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.comments, { eager: true })
  user: Usuario;

  @ManyToOne(() => Video, (video) => video.comments)
  video: Video;
}
