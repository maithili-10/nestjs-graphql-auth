import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';
import { ProjectService } from './../project/project.service';
import { Project } from 'src/project/entities/project.entity';

@Injectable()
export class EmployeeService {

  constructor(@InjectRepository(Employee) private employeeRepository:Repository<Employee>,
  private projectService:ProjectService
  ){}
  create(createEmployeeInput: CreateEmployeeInput) {
    return this.employeeRepository.save({
      name:createEmployeeInput .name,
      email:createEmployeeInput .email,
      designation:createEmployeeInput.designation,
      projectId:createEmployeeInput.projectId
    });
  }

  findAll() {
    return this.employeeRepository.find();
  }

  // findOne(id: String) {
  //   return `This action returns a #${id} employee`;
  // }

   async findOne(id) {
    const data = await this.employeeRepository.findOne(id);
    if (!data)
      throw new NotFoundException(); //throw new HttpException({}, 204);
    return data;
  }

  update(id, updateEmployeeInput: UpdateEmployeeInput) {
     return this.employeeRepository.update(
      { id: id },
      {
        name:  updateEmployeeInput.name,
        email:  updateEmployeeInput.email,
        designation:updateEmployeeInput.designation
      },
    );
  }

  remove(id) {
    return this.employeeRepository.delete({ id: id });
  }

  async getProject(id):Promise<Project>{
return this.projectService.findOne(id);
  }
}
