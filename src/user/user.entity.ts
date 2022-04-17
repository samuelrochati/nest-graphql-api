import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
}
