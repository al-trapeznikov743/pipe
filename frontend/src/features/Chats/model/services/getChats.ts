import {ThunkConfig} from '@/app/providers/StoreProvider';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ChatsData} from '../types/chatsSchema';

export const getChats = createAsyncThunk<ChatsData, void, ThunkConfig<string>>(
  'chats/getChats',
  async (_, {extra, rejectWithValue}) => {
    try {
      const response = await extra.api.get<ChatsData>('/chats');

      if (!response?.data) {
        return null;
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message || 'Failed to fetch chats');
    }
  }
);