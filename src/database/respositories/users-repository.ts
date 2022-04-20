import { User } from '../typeorm/entities/user.entity';

export abstract class UsersRepository {
  abstract create(user: User): Promise<User>;
  abstract findById(id: string): Promise<User | null>;
  abstract findAll(limit: number, offset: number): Promise<User[]>;
  abstract update(id: string, name: string): Promise<boolean>;
  abstract delete(id: string): Promise<boolean>;
}
