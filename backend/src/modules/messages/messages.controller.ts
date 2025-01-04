import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {MessagesService} from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  getMessages() {
    return this.messagesService.getMessages();
  }

  @Get(':id')
  getMessage(@Param('id', ParseIntPipe) id: number) {
    return this.messagesService.getMessageById(id);
  }

  @Post()
  addMessage(
    @Body()
    createMessageDto: {chatId: number; userId: number; content: string}
  ) {
    return this.messagesService.addMessage(createMessageDto);
  }

  @Put(':id')
  updateMessage(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMessageDto: Partial<{content: string}>
  ) {
    return this.messagesService.updateMessage(id, updateMessageDto);
  }

  @Delete(':id')
  deleteMessage(@Param('id', ParseIntPipe) id: number) {
    return this.messagesService.deleteMessage(id);
  }
}