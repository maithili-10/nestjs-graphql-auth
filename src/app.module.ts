import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeService } from './employee/employee.service';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [EmployeeModule,GraphQLModule.forRoot<ApolloDriverConfig>(
    {
      driver: ApolloDriver,
      autoSchemaFile:join(process.cwd(),'src/graphql-schema.gql'),

    }
  ),
TypeOrmModule.forRoot({
  type:'postgres',
  host:'localhost',
  port:5432,
  username:'postgres',
  password:'postgres',
  database:'employee',
  entities:["dist/**/*.entity{.ts,.js}"],
  synchronize:true
}),
ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
