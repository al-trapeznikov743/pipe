export interface ChatSchema {
  id: number;
  icon: string;
  label: string;
  lastMessage: string;
};

export type ChatsData = ChatSchema[];


interface MessageType {
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

export type MessagesData = MessageSchema[];

export interface ChatsSchema {
  chatId: number;
  chats: ChatsData | [];
  messages: MessagesData | [];
  chatsLoading: boolean;
  messagesLoading: boolean;
  error?: string | null;
};