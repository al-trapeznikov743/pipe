import Sidebar from '@/widgets/Sidebar';
import {ChatItem} from './ChatItem';
import * as s from '../Chats.module.scss';

const chatListMock = [
  {
    id: 1,
    icon: 'https://cdn-icons-png.flaticon.com/512/9165/9165147.png',
    label: 'First Chat',
    lastMessage: 'some message'
  },
  {
    id: 2,
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ7Ajn1r3W6XqPBevgN0v-VX8mk4c1lmBZQ&s',
    label: 'Second Chat',
    lastMessage: 'some message'
  }
];

export const ChatList = () => {
  return (
    <Sidebar className={s.chatList}>
      {
        chatListMock.map(({id, icon, label, lastMessage}) => {
          return (
            <ChatItem key={id} icon={icon} label={label} lastMessage={lastMessage}/>
          );
        })
      }
    </Sidebar>
  );
};