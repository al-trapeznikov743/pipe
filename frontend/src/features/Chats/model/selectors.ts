import {StateSchema} from '@/app/providers/StoreProvider';
import {ChatsData, MessagesData} from './types/chatsSchema';

export const getChatId = (state: StateSchema): number => state?.chats?.chatId || null;
export const getChatsData = (state: StateSchema): ChatsData => state?.chats?.chats || [];
export const getMessagesData = (state: StateSchema): MessagesData => state?.chats?.messages || [];