import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  async create(@Body() User: User): Promise<User> {
    return this.UserService.create(User);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.UserService.findAll();
  }
}
