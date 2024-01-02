import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async create(User: User): Promise<User> {
    const createdUser = new this.UserModel(User);
    const result = await createdUser.save();
    return result;
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }
}
