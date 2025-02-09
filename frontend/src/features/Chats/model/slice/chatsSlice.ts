import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChatsSchema, ChatsData, Messages, MessageSchema} from '../types/chatsSchema';
import {getChats} from '../services/getChats';
import {getMessages} from '../services/getMessages';

const initialState: ChatsSchema = {
  chatId: null,
  chats: [],
  messages: {},
  chatsLoading: false,
  messagesLoading: false,
};

const toJS = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

const getNextMessages = (currentMsgs: Messages, newMsgs: Messages) => {
  const msgsMap = new Map<number, MessageSchema>();

  currentMsgs.forEach((msg) => msgsMap.set(msg.id, msg));

  const hasNewMessages = newMsgs.some((newMsg) => !msgsMap.has(newMsg.id));

  if (!hasNewMessages) {
    return null;
  }

  newMsgs.forEach((msg) => msgsMap.set(msg.id, msg));

  return Array.from(msgsMap.values());
};

const getPreparedMsgs = (messages: Messages) => messages
  .map((msg, index, arr) => ({
    ...msg,
    showIcon: index === arr.length - 1 || msg.userId !== arr[index + 1]?.userId
  }));

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    /* setChats: (state, action: PayloadAction<ChatsData>) => {
      state.chats = action.payload;
    }, */
    setChatId: (state, action: PayloadAction<number | null>) => {
      state.chatId = action.payload;
    },
    setMessages: (
      state,
      action: PayloadAction<{chatId: number, messages: Messages}>
    ) => {
      const {chatId, messages} = action.payload;

      const currentMsgs = state.messages[chatId];
      let nextMsgs = messages;

      if (currentMsgs?.length) {
        nextMsgs = getNextMessages(currentMsgs, nextMsgs);
      }

      if (nextMsgs) {
        state.messages[chatId] = getPreparedMsgs(nextMsgs);
      }
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
      .addCase(getMessages.fulfilled, (state) => {
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