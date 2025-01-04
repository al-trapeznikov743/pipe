import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ChatsService} from './chats.service';

@Controller('/chats')
export class ChatsController {
  constructor(private chatsService: ChatsService) {}

  @Get()
  getChats() {
    return this.chatsService.getChats();
  }

  @Get(':id')
  getChat(@Param('id', ParseIntPipe) id: number) {
    return this.chatsService.getChatById(id);
  }

  @Post()
  addChat(@Body() createChatDto: {name?: string; isGroup?: boolean}) {
    return this.chatsService.addChat(createChatDto);
  }

  @Put(':id')
  updateChat(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateChatDto: Partial<{name?: string; isGroup?: boolean}>
  ) {
    return this.chatsService.updateChat(id, updateChatDto);
  }

  @Delete(':id')
  deleteChat(@Param('id', ParseIntPipe) id: number) {
    return this.chatsService.deleteChat(id);
  }
}