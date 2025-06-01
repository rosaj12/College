// Importa os decorators e utilitários do pacote @nestjs/mongoose para criação de schemas com decorators.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// Importa tipos do Mongoose, incluindo Document (documento de banco) e Types (como ObjectId).
import { Document, Types } from 'mongoose';

// Importa a entidade User para fazer referência ao dono do vídeo.
import { User } from '../usuario/schema';

// Cria um tipo auxiliar que representa um documento Mongoose baseado na entidade Video.
export type VideoDocument = Video & Document;

// Define a classe Video como um schema Mongoose.
@Schema()
export class Video {

  // Define a propriedade 'title' como obrigatória.
  // Representa o título do vídeo.
  @Prop({ required: true })
  title: string;

  // Define a propriedade 'owner' como um ObjectId referenciando a coleção 'User'.
  // Indica quem é o dono (criador) do vídeo.
  @Prop({ type: Types.ObjectId, ref: 'User' })
  owner: User;

  // Define a propriedade 'reactions' como um array de ObjectIds referenciando a coleção 'Reaction'.
  // Cada ID representa uma reação feita a este vídeo.
  // Começa como array vazio por padrão.
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Reaction' }], default: [] })
  reactions: Types.ObjectId[];

  // Define a propriedade 'comments' como um array de ObjectIds referenciando a coleção 'Comment'.
  // Cada ID representa um comentário feito neste vídeo.
  // Começa como array vazio por padrão.
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }], default: [] })
  comments: Types.ObjectId[];
}

// Gera o schema Mongoose automaticamente com base na classe e seus decorators.
export const VideoSchema = SchemaFactory.createForClass(Video);
