import {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Input} from '@/shared';
import {getChatId, getMessagesData} from '@/features/Chats/model/selectors';
import MessageList from './MessageList';
import {useMessages} from '@/features/Chats/model/services/getMessages';
import * as s from './Chat.module.scss';

const Chat = () => {
  const chatId = useSelector(getChatId);
  const messages = useSelector(getMessagesData);

  const fetchMessages = useMessages();

  // console.log('chatId_L: ', chatId);
  // console.log('messages_L: ', messages);

  const fetchMessagesMemo = useCallback(() => {
    if (chatId) {
      fetchMessages(chatId);
    }
  }, [chatId, fetchMessages]);

  useEffect(() => {
    fetchMessagesMemo();
  }, [fetchMessagesMemo]);

  return (
    <div className={s.chat}>
      <MessageList chatId={chatId} messages={messages} />
      <div className={s.chatInput}>
        <Input />
      </div>
    </div>
  );
};

export default Chat;