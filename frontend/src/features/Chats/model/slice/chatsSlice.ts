import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChatsSchema, ChatsData, MessagesData} from '../types/chatsSchema';
import {getChats} from '../services/getChats';
import {getMessages} from '../services/getMessages';

const initialState: ChatsSchema = {
  chatId: null,
  chats: [],
  messages: [],
  chatsLoading: false,
  messagesLoading: false,
};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    /* setChats: (state, action: PayloadAction<ChatsData>) => {
      state.chats = action.payload;
    }, */
    setChatId: (state, action: PayloadAction<number | null>) => {
      state.chatId = action.payload;
      state.messages = [];
    }
  },
  extraReducers: (builder) => {
    builder
      // Chats
      .addCase(getChats.pending, (state) => {
        state.chatsLoading = true;
        state.error = null;
      })
      .addCase(getChats.fulfilled, (state, action: PayloadAction<ChatsData>) => {
        state.chats = action.payload;
        state.chatsLoading = false;
      })
      .addCase(getChats.rejected, (state, action) => {
        state.chatsLoading = false;
        state.error = action.payload;
      })

      // messages
      .addCase(getMessages.pending, (state) => {
        state.messagesLoading = true;
        state.error = null;
      })
      .addCase(getMessages.fulfilled, (state, action: PayloadAction<MessagesData>) => {
        state.messages = action.payload;
        state.messagesLoading = false;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.messagesLoading = false;
        state.error = action.payload;
      });
  }
});

export const {actions: chatsActions} = chatsSlice;
export const {reducer: chatsReducer} = chatsSlice;