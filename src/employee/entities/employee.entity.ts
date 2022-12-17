import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
 
  id:String ;

  @Field()
  @Column()
  name: String;

  @Field()
  @Column()
  email: String;

  @Field({nullable:true})
  @Column({nullable:true})
  designation: String;

}
