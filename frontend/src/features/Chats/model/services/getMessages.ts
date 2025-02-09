import {ThunkConfig} from '@/app/providers/StoreProvider';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Messages} from '../types/chatsSchema';
import {useAppDispatch} from '@/shared';
import {chatsActions} from '../slice/chatsSlice';

export const getMessages = createAsyncThunk<Messages, number, ThunkConfig<string>>(
  'chats/getMessages',
  async (chatId, {extra, rejectWithValue}) => {
    try {
      const response = await extra.api.get<Messages>(`/messages?chatId=${chatId}`);

      if (!response?.data) {
        return null;
      }

      return response.data;
    } catch (e) {
      console.error('Error fetching messages:', e);

      return rejectWithValue(e.message || 'Failed to fetch messages');
    }
  }
);

export const useMessages = () => {
  const dispatch = useAppDispatch();

  const fetchMessages = async(chatId: number) => {
    try {
      const messages = await dispatch(getMessages(chatId)).unwrap();
      
      if (messages) {
        dispatch(chatsActions.setMessages({chatId, messages: messages}));
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  return fetchMessages;
};