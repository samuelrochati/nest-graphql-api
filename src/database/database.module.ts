import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './respositories/users-repository';
import { User } from './typeorm/entities/user.entity';
import { TypeOrmUsersRepository } from './typeorm/repositories/typeorm-users-repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: UsersRepository,
      useClass: TypeOrmUsersRepository,
    },
  ],
  exports: [UsersRepository],
})
export class DatabaseModule {}
