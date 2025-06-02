// Importa o decorator @Injectable, que marca a classe como um provedor injetável em outros lugares do NestJS.
import { Injectable } from '@nestjs/common';

// Importa o decorator @InjectModel para injetar modelos Mongoose no serviço.
import { InjectModel } from '@nestjs/mongoose';

// Importa o tipo Comment e seu documento CommentDocument, usado pelo Mongoose.
import { Comment, CommentDocument } from './schema';

// Importa o tipo Model do Mongoose, que permite realizar operações no banco de dados.
import { Model } from 'mongoose';

// Importa o DTO que contém os dados necessários para criar um comentário.
import { CreateCommentDto } from './criarCommentDTO/criarCommentDTO';

// Importa o tipo Video e seu documento VideoDocument, que representa a entidade vídeo.
import { Video, VideoDocument } from '../video/schema';

// Marca a classe como um serviço injetável no NestJS.
@Injectable()
export class CommentService {
  // Construtor do serviço, onde os modelos do Mongoose são injetados.
  constructor(
    // Injeta o modelo do Mongoose para a coleção Comment.
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,

    // Injeta o modelo do Mongoose para a coleção Video.
    @InjectModel(Video.name) private videoModel: Model<VideoDocument>,
  ) {}

  // Método assíncrono responsável por criar um comentário em um vídeo.
  async commentOnVideo(dto: CreateCommentDto): Promise<Comment> {
    // Cria um novo comentário na coleção 'comments' com os dados do DTO.
    const comment = await this.commentModel.create({
      content: dto.content, // Conteúdo do comentário
      user: dto.user,       // ID do usuário que fez o comentário
    });

    // Atualiza o documento de vídeo correspondente, adicionando o ID do comentário ao array 'comments'.
    await this.videoModel.findByIdAndUpdate(dto.videoId, {
      $push: { comments: comment._id }, // Push no array de comentários
    });

    // Retorna o comentário criado como resposta.
    return comment;
  }
}
