import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChatsData, ChatsSchema} from '../types/chatsSchema';
import {getChats} from '../services/getChats';

const initialState: ChatsSchema = {
  chats: [],
  isLoading: false
};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<ChatsData>) => {
      state.chats = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getChats.fulfilled, (state, action: PayloadAction<ChatsData>) => {
        state.chats = action.payload;
        state.isLoading = false;
      })
      .addCase(getChats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const {actions: chatsActions} = chatsSlice;
export const {reducer: chatsReducer} = chatsSlice;