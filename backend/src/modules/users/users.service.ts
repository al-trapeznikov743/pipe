import {PrismaService} from '../../prisma.service';
import {Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}

  getUsers() {
    return this.prisma.user.findMany();
  }

  getUserById(id: number) {
    return this.prisma.user.findUnique({where: {id}});
  }

  addUser(data: {username: string; email: string; passwordHash: string}) {
    return this.prisma.user.create({data});
  }

  updateUser(id: number, data: Partial<{username: string; email: string; passwordHash: string}>) {
    return this.prisma.user.update({where: { id }, data});
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({where: {id}});
  }
};