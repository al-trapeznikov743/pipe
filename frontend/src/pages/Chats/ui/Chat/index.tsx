import {MessageBlock} from './MessageBlock';
import {Input} from '@/shared';
import * as s from '../Chats.module.scss';

const messagesMock = [
  {
    id: 1,
    chatId: 1,
    user: {
      icon: 'https://icons.iconarchive.com/icons/icons8/android/256/Users-User-icon.png',
    },
    messages: [
      {id: 1, text: 'First message', time: '1 hour'},
      {id: 2, text: 'Seconds message', time: '1 hour'},
    ]
  },
  {
    id: 2,
    chatId: 1,
    user: {
      icon: 'https://cdn-icons-png.flaticon.com/512/219/219986.png',
    },
    messages: [
      {id: 1, text: 'First message', time: '1 hour'},
      {id: 2, text: 'Seconds message', time: '1 hour'},
    ]
  },

  {
    id: 3,
    chatId: 2,
    user: {
      icon: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
    },
    messages: [
      {id: 1, text: 'First message', time: '1 hour'},
      {id: 2, text: 'Seconds message', time: '1 hour'},
    ]
  },
  {
    id: 4,
    chatId: 2,
    user: {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s',
    },
    messages: [
      {id: 1, text: 'First message', time: '1 hour'},
      {id: 2, text: 'Seconds message', time: '1 hour'},
    ]
  },
  {
    id: 5,
    chatId: 2,
    user: {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6D6UFXarBke1sDjK_TnJfWgF0EXirVJHwvw&s',
    },
    messages: [
      {id: 1, text: 'First message', time: '1 hour'},
      {id: 2, text: 'Seconds message', time: '1 hour'},
    ]
  }
];

export const Chat = () => {
  return (
    <div className={s.chat}>
      <div className={s.messagesContainer}>
        {
          messagesMock.map(({id, user, messages}) => {
            return (
              <MessageBlock key={id} user={user} messages={messages} />
            );
          })
        }
      </div>
      <div className={s.chatInput}>
        <Input />
      </div>
    </div>
  );
};