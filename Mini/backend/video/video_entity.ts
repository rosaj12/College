import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from '../usuario/usuario_entity';
import { Reaction } from '../reaction/reaction_entity';
import { Comment } from '../comment/comment_entity';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.videos, { eager: true })
  owner: Usuario;

  @OneToMany(() => Reaction, (reaction) => reaction.video, { cascade: true })
  reactions: Reaction[];

  @OneToMany(() => Comment, (comment) => comment.video, { cascade: true })
  comments: Comment[];
}
