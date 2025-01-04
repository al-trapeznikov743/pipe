import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChatParticipantsService {
  constructor(private prisma: PrismaService) {}

  getChatParticipants() {
    return this.prisma.chatParticipant.findMany();
  }

  getChatParticipantById(id: number) {
    return this.prisma.chatParticipant.findUnique({ where: { id } });
  }

  addChatParticipant(data: { chatId: number; userId: number }) {
    return this.prisma.chatParticipant.create({ data });
  }

  deleteChatParticipant(id: number) {
    return this.prisma.chatParticipant.delete({ where: { id } });
  }
}