import Message from '@/entities/Message';
import {classNames} from '@/shared';
import * as s from './MessageList.module.scss';

interface MessageType {
  id: number,
  text: string,
  time: string
};

interface MessageData {
  id: number;
  chatId: number;
  user: {icon: string};
  messages: MessageType[];
};

interface MessageListProps {
  messageList: MessageData[];
};

const MessageList = ({messageList}: MessageListProps) => {
  return (
    <div className={s.messageList}>
      {
        messageList.map(({id, user: {icon}, messages}) => {
          return (
            <div key={id} className={s.messageContainer}>
              <div className={classNames(s.icon, {}, [s.messageIcon])}>
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