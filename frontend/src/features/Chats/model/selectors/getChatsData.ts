import {StateSchema} from '@/app/providers/StoreProvider';
import {ChatsData} from '../types/chatsSchema';

export const getChatsData = (state: StateSchema): ChatsData => state?.chats?.chats || [];