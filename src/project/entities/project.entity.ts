import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './../../employee/entities/employee.entity';

@ObjectType()
@Entity()
export class Project {
  @Field()
  @PrimaryGeneratedColumn('uuid')
 
  id:String ;

  @Field()
  @Column()
  projectname: String;

  @OneToMany(()=>Employee,employee=>employee.project)
  @Field(()=>[Employee],{nullable:true})
  employees:Employee[]
}
