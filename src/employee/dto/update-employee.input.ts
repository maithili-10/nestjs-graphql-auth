import { CreateEmployeeInput } from './create-employee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  @Field()
  id:String ;

  @Field({nullable:true})
  
  name: String;

  @Field({nullable:true})
  
  email: String;

  @Field({nullable:true})
  
  designation: String;

}
