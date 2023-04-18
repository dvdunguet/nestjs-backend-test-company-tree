import { Field, ObjectType, Float } from '@nestjs/graphql';
import { Travel } from './travel.entity';

@ObjectType()
export class Company {
  @Field()
  id: string;

  @Field()
  createdAt: string;

  @Field()
  name: string;

  @Field()
  parentId: string;

  @Field(() => [Company], { nullable: true })
  children?: Company[];

  @Field(() => [Travel], { nullable: true })
  travels?: Travel[];

  @Field(() => Float)
  cost?: number;
}
