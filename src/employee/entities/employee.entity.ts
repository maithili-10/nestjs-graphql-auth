import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

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

@ManyToOne(()=>Project,project=>project.employees)
@Field(()=>Project)
project:Project

@Column()
@Field()
projectId:String
}
