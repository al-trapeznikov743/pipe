import {Module} from '@nestjs/common';
import {PrismaService} from './prisma.service';

import {UsersController} from './modules/users/users.controller';
import {ChatsController} from './modules/chats/chats.controller';
import {MessagesController} from './modules/messages/messages.controller';

import {UsersService} from './modules/users/users.service';
import {ChatsService} from './modules/chats/chats.service';
import {MessagesService} from './modules/messages/messages.service';

@Module({
  controllers: [UsersController, ChatsController, MessagesController],
  providers: [UsersService, ChatsService, MessagesService, PrismaService]
})
export class AppModule {};