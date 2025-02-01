import {ThunkConfig} from '@/app/providers/StoreProvider';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ChatsData} from '../types/chatsSchema';
import {chatsActions} from '../slice/chatsSlice';

export const getChats = createAsyncThunk<
  ChatsData,
  void,
  ThunkConfig<string>
>(
  'chats/getChats',
  async (_, {extra, dispatch, rejectWithValue}) => {
    try {
      const response = await extra.api.get<ChatsData>('/chats');

      console.log('response_90: ', response);

      if (!response.data) {
        throw new Error('No chats found');
      }

      dispatch(chatsActions.setChats(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message || 'Failed to fetch chats');
    }
  }
);