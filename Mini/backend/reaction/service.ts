// Importa o decorator @Injectable para tornar a classe injetável no sistema de dependência do NestJS.
import { Injectable } from '@nestjs/common';

// Importa o decorator @InjectModel para injetar modelos do Mongoose.
import { InjectModel } from '@nestjs/mongoose';

// Importa a entidade Reaction e seu tipo de documento ReactionDocument, usado pelo Mongoose.
import { Reaction, ReactionDocument } from './schema';

// Importa o tipo Model do Mongoose, que representa uma coleção no banco e permite CRUD.
import { Model } from 'mongoose';

// Importa o DTO que contém os dados necessários para criar uma nova reação.
import { CreateReactionDto } from './criarReactionDTO/criarReactionDTO';

// Importa a entidade Video e seu tipo de documento, que será atualizado com a nova reação.
import { Video, VideoDocument } from '../video/schema';

// Reimporta o decorator @InjectModel com um alias para evitar conflito de nomes entre Reaction e Video.
import { InjectModel as InjectVideoModel } from '@nestjs/mongoose';

// Declara a classe como um serviço injetável.
@Injectable()
export class ReactionService {
  // Construtor do serviço, que injeta os modelos de Reaction e Video do Mongoose.
  constructor(
    // Injeta o modelo da entidade Reaction (coleção de reações).
    @InjectModel(Reaction.name) private reactionModel: Model<ReactionDocument>,

    // Injeta o modelo da entidade Video (coleção de vídeos), com alias para evitar conflito.
    @InjectVideoModel(Video.name) private videoModel: Model<VideoDocument>,
  ) {}

  // Método assíncrono que processa a criação de uma reação a um vídeo.
  async reactToVideo(dto: CreateReactionDto): Promise<Reaction> {
    // Cria um novo documento de reação no banco de dados com os dados do DTO (tipo e usuário).
    const reaction = await this.reactionModel.create({
      type: dto.type,   // Tipo da reação: 'gostei', 'amei', etc.
      user: dto.user,   // ID do usuário que reagiu
    });

    // Atualiza o vídeo correspondente adicionando o ID da nova reação ao array "reactions".
    await this.videoModel.findByIdAndUpdate(dto.videoId, {
      $push: { reactions: reaction._id }, // Insere o ID da reação no campo reactions do vídeo
    });

    // Retorna o objeto de reação criado.
    return reaction;
  }
}
