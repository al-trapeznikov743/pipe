export interface ChatSchema {
  id: number;
  icon: string;
  label: string;
  lastMessage: string;
};

export type ChatsData = ChatSchema[];

/* interface MessageType {
  id: number,
  text: string,
  time: string
};

interface MessageSchema {
  id: number;
  chatId: number;
  user: {icon: string};
  messages: MessageType[];
};

export type MessagesData = MessageSchema[]; */







export interface MessageSchema {
  id: number;
  chatId: number;
  userId: number;
  text: string;
  time: string;
  user: {icon: string};
  showIcon?: boolean;
};

export type Messages = MessageSchema[];

export type StateMessagesSchema = {
  [key: number]: Messages;
};





export interface ChatsSchema {
  chatId: number;
  chats: ChatsData | [];
  messages: StateMessagesSchema;
  chatsLoading: boolean;
  messagesLoading: boolean;
  error?: string | null;
};