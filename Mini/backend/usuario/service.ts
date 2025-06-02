// Importa o decorator @Injectable do NestJS para tornar a classe um provedor injetável.
import { Injectable } from '@nestjs/common';

// Importa o decorator @InjectModel para injetar modelos Mongoose no serviço.
import { InjectModel } from '@nestjs/mongoose';

// Importa o tipo Model do Mongoose, que representa a interface da coleção no banco de dados.
import { Model } from 'mongoose';

// Importa a entidade User e seu tipo de documento correspondente (UserDocument).
import { User, UserDocument } from './schema';

// Importa o DTO usado para criar novos usuários.
import { CreateUserDto } from './criarUsuarioDTO/criarUsuarioDTO';

// Define a classe UserService como um serviço injetável.
@Injectable()
export class UserService {

  // Injeta o model do Mongoose para a coleção User, permitindo acessar o banco.
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Método assíncrono para criar um novo usuário.
  async create(dto: CreateUserDto): Promise<User> {
    // Cria um novo documento no MongoDB usando os dados do DTO.
    return this.userModel.create(dto);
  }

  // Método assíncrono para buscar todos os usuários no banco.
  async findAll(): Promise<User[]> {
    // Executa uma query que busca todos os documentos da coleção User.
    return this.userModel.find().exec();
  }

  // Método assíncrono para buscar um único usuário por ID.
  async findById(id: string): Promise<User> {
    // Executa uma query para encontrar o usuário pelo ID fornecido.
    return this.userModel.findById(id).exec();
  }
}
