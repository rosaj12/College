// Importa o decorator @Injectable para marcar esta classe como um provedor injetável.
import { Injectable } from '@nestjs/common';

// Importa o decorator @InjectModel para injetar o model Mongoose correspondente à entidade Video.
import { InjectModel } from '@nestjs/mongoose';

// Importa a entidade Video e o tipo VideoDocument que representa um documento Mongoose.
import { Video, VideoDocument } from './schema';

// Importa o tipo Model do Mongoose, que permite realizar operações como create, find, etc.
import { Model } from 'mongoose';

// Importa o DTO usado para criação de vídeos.
import { CreateVideoDto } from './criarVideoDTO/criarVideoDTO';

// Declara a classe VideoService como um serviço injetável.
@Injectable()
export class VideoService {

  // Injeta o model de Video no construtor para que possa ser usado em métodos como create e find.
  constructor(@InjectModel(Video.name) private videoModel: Model<VideoDocument>) {}

  // Método assíncrono para criar um novo vídeo.
  async create(dto: CreateVideoDto): Promise<Video> {
    // Cria um novo documento de vídeo com base nos dados do DTO e o salva no banco.
    return this.videoModel.create(dto);
  }

  // Método assíncrono para buscar todos os vídeos existentes no banco.
  async findAll(): Promise<Video[]> {
    return this.videoModel
      .find() // Busca todos os vídeos
      .populate('owner') // Substitui o ObjectId do owner pelo documento completo do usuário
      .populate('reactions') // Substitui os ObjectIds por documentos completos das reações
      .populate('comments') // Substitui os ObjectIds por documentos completos dos comentários
      .exec(); // Executa a query
  }

  // Método assíncrono para buscar um vídeo específico por ID.
  async findById(id: string): Promise<Video> {
    return this.videoModel
      .findById(id) // Busca o vídeo com o ID fornecido
      .populate('owner') // Popula os dados do dono do vídeo
      .populate('reactions') // Popula as reações
      .populate('comments') // Popula os comentários
      .exec(); // Executa a query
  }
}
