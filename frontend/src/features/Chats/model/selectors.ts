import {StateSchema} from '@/app/providers/StoreProvider';
import {ChatsData, StateMessagesSchema} from './types/chatsSchema';

export const getChatId = (state: StateSchema): number => state?.chats?.chatId || null;
export const getChatsData = (state: StateSchema): ChatsData => state?.chats?.chats || [];
export const getMessagesData = (state: StateSchema): StateMessagesSchema => state?.chats?.messages || null;