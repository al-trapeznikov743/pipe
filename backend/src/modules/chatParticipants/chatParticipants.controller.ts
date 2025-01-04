import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {ChatParticipantsService} from './chatParticipants.service';

@Controller('/participants')
export class ChatParticipantsController {
  constructor(private chatParticipantsService: ChatParticipantsService) {}

  @Get()
  getChatParticipants() {
    return this.chatParticipantsService.getChatParticipants();
  }

  @Get(':id')
  getChatParticipant(@Param('id', ParseIntPipe) id: number) {
    return this.chatParticipantsService.getChatParticipantById(id);
  }

  @Post()
  addChatParticipant(
    @Body() createChatParticipantDto: {chatId: number; userId: number}
  ) {
    return this.chatParticipantsService.addChatParticipant(createChatParticipantDto);
  }

  @Delete(':id')
  deleteChatParticipant(@Param('id', ParseIntPipe) id: number) {
    return this.chatParticipantsService.deleteChatParticipant(id);
  }
}