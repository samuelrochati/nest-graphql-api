import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateUserUseCase } from 'src/modules/use-cases/users/create-user-use-case';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, CreateUserUseCase],
})
export class HttpModule {}
