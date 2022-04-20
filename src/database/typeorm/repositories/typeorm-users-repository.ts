import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'src/database/respositories/users-repository';
import { User } from 'src/database/typeorm/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeOrmUsersRepository implements UsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create({ email, name }: User): Promise<User> {
    const user = this.usersRepository.create({ name, email });

    await this.usersRepository.save(user);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      return null;
    }

    return user;
  }

  async findAll(limit: number, offset: number): Promise<User[]> {
    const users = await this.usersRepository.find({
      take: limit,
      skip: offset,
    });

    return users;
  }

  async update(id: string, name: string): Promise<boolean> {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      return false;
    }

    await this.usersRepository.update(user, { name });

    return true;
  }

  async delete(id: string): Promise<boolean> {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      return false;
    }

    await this.usersRepository.delete(user);

    return true;
  }
}
