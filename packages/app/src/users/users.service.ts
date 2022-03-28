import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '../models/user';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUpdateInput } from '../@generated/prisma-nestjs-graphql/user/user-update.input';

@Injectable()
export class UsersService {
  user: User;

  constructor(private prismaService: PrismaService) {
    this.user = new User(this.prismaService);
  }

  async create(createUserInput: UserCreateInput) {
    return await this.user.create(createUserInput);
  }

  async findAll() {
    return await this.user.findAll();
  }

  async findOne(id: number) {
    return await this.user.findOne(id);
  }

  async update(id: number, updateUserInput: UserUpdateInput) {
    return await this.user.update(id, updateUserInput);
  }

  async remove(id: number) {
    return await this.user.remove(id);
  }
}
