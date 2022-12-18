import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project) private projectRepository:Repository<Project>){}
  create(createProjectInput: CreateProjectInput) {
    return this.projectRepository.save({
      projectname:createProjectInput.projectname
    });
  }

  findAll() {
    return this.projectRepository.find({
      relations:["employees"]
    });
  }

  async findOne(id){
    const data=await this.projectRepository.findOne(id);
    if(!data)
    throw new NotFoundException();
    return data;
  }

  update(id, updateProjectInput: UpdateProjectInput) {
    return this.projectRepository.update(
      { id: id },
      {
        projectname:  updateProjectInput.projectname,
      
      },
    );
  }

  remove(id) {
   return this.projectRepository.delete({id:id})
  }
}
