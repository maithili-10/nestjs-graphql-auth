import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation(() => Employee)
  createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput) {
    return this.employeeService.create(createEmployeeInput);
  }

  @Query(() => [Employee], { name: 'getAllEmployee' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Query(() => Employee, { name: 'oneEmployee' })
  findOne(@Args('id', { type: () => String }) id: String) {
    return this.employeeService.findOne(id);
  }

  @Mutation(() => Employee)
  updateEmployee(@Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput) {
    return this.employeeService.update(updateEmployeeInput.id, updateEmployeeInput);
  }

  @Mutation(() => Employee)
  removeEmployee(@Args('id', { type: () => String }) id: String) {
    return this.employeeService.remove(id);
  }
}
