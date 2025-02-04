import Message from '@/entities/Message';
import {classNames} from '@/shared';
import {MessagesData} from '@/features/Chats/model/types/chatsSchema';
import * as s from './Chat.module.scss';

interface MessageListProps {
  messages: MessagesData;
};

const MessageList = ({messages: messageList}: MessageListProps) => {
  return (
    <div className={s.messageList}>
      {
        messageList.map(({id, user: {icon}, messages}) => {
          return (
            <div key={id} className={s.messageContainer}>
              <div className={classNames('user-icon', {}, [s.messageIcon])}>
                <img src={icon} />
              </div>
              <div className={s.messages}>
                {
                  messages.map(({id, text, time}) => {
                    return <Message key={id} text={text} time={time} />;
                  })
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default MessageList;