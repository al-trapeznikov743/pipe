import {Chats} from '@/features/Chats';
import {Chat} from '@/features/Chat';
import * as s from './ChatPage.module.scss';

export const ChatPage = () => {
  return (
    <div className={s.chatPage}>
      <Chats />
      <Chat />
    </div>
  );
};

export default ChatPage;