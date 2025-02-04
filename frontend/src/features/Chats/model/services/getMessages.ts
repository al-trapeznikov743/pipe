import {ThunkConfig} from '@/app/providers/StoreProvider';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {MessagesData} from '../types/chatsSchema';

export const getMessages = createAsyncThunk<MessagesData, number, ThunkConfig<string>>(
  'chats/getMessages',
  async (chatId, {extra, rejectWithValue}) => {
    try {
      const response = await extra.api.get<MessagesData>(`/messages?chatId=${chatId}`);

      if (!response?.data) {
        return null;
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message || 'Failed to fetch messages');
    }
  }
);