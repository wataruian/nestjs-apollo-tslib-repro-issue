import { Injectable } from '@nestjs/common';
import { User as UserModel } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUpdateInput } from '../@generated/prisma-nestjs-graphql/user/user-update.input';
import { PrismaService } from '../prisma.service';

@Injectable()
export class User {
  constructor(private prismaService: PrismaService) {}

  async create(createUserInput: UserCreateInput): Promise<UserModel> {
    return await this.prismaService['user'].create({ data: createUserInput });
  }

  async findAll(): Promise<UserModel[]> {
    return await this.prismaService['user'].findMany();
  }

  async findOne(id: number): Promise<UserModel | null> {
    return await this.prismaService['user'].findFirst({ where: { id: id } });
  }

  async update(
    id: number,
    updateUserInput: UserUpdateInput,
  ): Promise<UserModel> {
    return await this.prismaService['user'].update({
      where: { id: id },
      data: updateUserInput,
    });
  }

  async remove(id: number): Promise<UserModel> {
    return await this.prismaService['user'].delete({ where: { id: id } });
  }
}
