import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/database/typeorm/entities/user.entity';
import { CreateUserUseCase } from 'src/modules/use-cases/users/create-user-use-case';
import { CreateUserInput } from '../dto/input/create-user-input';

@Resolver(() => User)
export class UserResolver {
  constructor(private createUseUseCase: CreateUserUseCase) {}

  @Query(() => Boolean)
  async ok() {
    return true;
  }

  @Mutation(() => User)
  async create(@Args('data') { name, email }: CreateUserInput): Promise<User> {
    const user = await this.createUseUseCase.handle({ name, email });

    return user;
  }
}
