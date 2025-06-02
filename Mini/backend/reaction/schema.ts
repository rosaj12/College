// Importa decorators e funções do pacote @nestjs/mongoose para definir o schema com decorators.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// Importa tipos do Mongoose, incluindo Document e Types (para ObjectId).
import { Document, Types } from 'mongoose';

// Importa a definição do schema do usuário, pois cada reação está associada a um usuário.
import { User } from '../usuario/schema';

// Define um tipo auxiliar que representa o documento completo da coleção Reaction,
// unindo a classe Reaction com o tipo Document do Mongoose.
export type ReactionDocument = Reaction & Document;

// Define a classe Reaction como um schema Mongoose usando o decorator @Schema().
@Schema()
export class Reaction {

  // Define a propriedade "type" (tipo de reação) como uma string que deve estar entre os valores listados.
  // Se nenhum valor for especificado, será assumido o valor "gostei".
  @Prop({ enum: ['gostei', 'amei', 'haha', 'compartilhar'], default: 'gostei' })
  type: string;

  // Define a propriedade "user" como um ObjectId que referencia a coleção 'User'.
  // Essa propriedade é obrigatória (required: true).
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;
}

// Gera automaticamente o schema Mongoose com base na classe Reaction e nos decorators utilizados.
export const ReactionSchema = SchemaFactory.createForClass(Reaction);
