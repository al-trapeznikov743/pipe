export interface ChatSchema {
  id: number;
  icon: string;
  label: string;
  lastMessage: string;
};

export type ChatsData = ChatSchema[];

export interface ChatsSchema {
  chats: ChatsData | [];
  isLoading: boolean;
  error?: string | null;
};