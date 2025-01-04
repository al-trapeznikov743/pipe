import {ChatList} from './ChatList';
import {Chat} from './Chat';
import * as s from './Chats.module.scss';

export const Chats = () => {
  return (
    <div className={s.chatsPage}>
      <ChatList />
      <Chat />
    </div>
  );
};

export default Chats;