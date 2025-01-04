import {Injectable} from '@nestjs/common';
import {PrismaService} from '../../prisma.service';

@Injectable()
export class ChatsService {
  constructor(private prisma: PrismaService) {}

  getChats() {
    return this.prisma.chat.findMany();
  }

  getChatById(id: number) {
    return this.prisma.chat.findUnique({where: {id}});
  }

  addChat(data: {name?: string; isGroup?: boolean}) {
    return this.prisma.chat.create({data});
  }

  updateChat(id: number, data: Partial<{name?: string; isGroup?: boolean}>) {
    return this.prisma.chat.update({where: {id}, data});
  }

  deleteChat(id: number) {
    return this.prisma.chat.delete({where: {id}});
  }
}