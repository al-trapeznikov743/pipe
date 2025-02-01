import {ChatSchema, ChatsData, ChatsSchema} from './model/types/chatsSchema';
import {chatsReducer, chatsActions} from './model/slice/chatsSlice';
import Chats from './ui/Chats';

export {
  Chats,
  ChatSchema,
  ChatsData,
  ChatsSchema,
  chatsReducer,
  chatsActions
};