// Importa o decorator @Module, necessário para definir um módulo no NestJS.
import { Module } from '@nestjs/common';

// Importa o MongooseModule, que permite a integração do NestJS com o MongoDB via Mongoose.
import { MongooseModule } from '@nestjs/mongoose';

// Importa o modelo e o schema da entidade User.
import { User, UserSchema } from './schema';

// Importa o serviço responsável pela lógica de negócios relacionada a usuários.
import { UserService } from './service';

// Importa o controller que expõe as rotas HTTP para manipulação de usuários.
import { UserController } from './controlador';

// Define o módulo UserModule com suas dependências, serviços e controladores.
@Module({
  // Importa e registra o schema User no Mongoose.
  // Isso permite que o Model<User> seja injetado em qualquer provider do módulo.
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],

  // Define os serviços que serão utilizados dentro deste módulo.
  providers: [UserService],

  // Define os controllers responsáveis pelas rotas HTTP.
  controllers: [UserController],

  // Exporta o serviço UserService para que possa ser utilizado em outros módulos (como Auth, por exemplo).
  exports: [UserService]
})
// Exporta a classe UserModule para ser usada no AppModule ou em outros módulos.
export class UserModule {}
