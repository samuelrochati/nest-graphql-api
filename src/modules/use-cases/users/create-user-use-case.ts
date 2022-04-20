import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/database/respositories/users-repository';
import { User } from 'src/database/typeorm/entities/user.entity';

export type CreateUserParams = {
  name: string;
  email: string;
};

@Injectable()
export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async handle({ name, email }: CreateUserParams): Promise<User> {
    const user = await this.usersRepository.create({ name, email });

    return user;
  }
}
