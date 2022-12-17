import { InputType, Int, Field } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CreateEmployeeInput {
 

  @Field()
  
  name: String;

  @Field()
  
  email: String;

  @Field({nullable:true})
  
  designation: String;

}
