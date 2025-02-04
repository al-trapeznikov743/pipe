import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Input, useAppDispatch} from '@/shared';
import {getChatId, getMessagesData} from '@/features/Chats/model/selectors';
import MessageList from './MessageList';
import {getMessages} from '@/features/Chats/model/services/getMessages';
import * as s from './Chat.module.scss';

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

const Chat = () => {
  const dispatch = useAppDispatch();

  const chatId = useSelector(getChatId);
  const messages = useSelector(getMessagesData);

  console.log('chatId_L: ', chatId);
  console.log('messages_L: ', messages);

  useEffect(() => {
    if (chatId) {
      dispatch(getMessages(chatId));
    }
  }, [dispatch, chatId]);

  return (
    <div className={s.chat}>
      <MessageList messages={messages} />
      <div className={s.chatInput}>
        <Input />
      </div>
    </div>
  );
};

export default Chat;