import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  getMessages() {
    return this.prisma.message.findMany();
  }

  getMessageById(id: number) {
    return this.prisma.message.findUnique({where: {id}});
  }

  addMessage(data: { chatId: number; userId: number; content: string }) {
    return this.prisma.message.create({data});
  }

  updateMessage(id: number, data: Partial<{ content: string }>) {
    return this.prisma.message.update({where: {id}, data});
  }

  deleteMessage(id: number) {
    return this.prisma.message.delete({where: {id}});
  }
}