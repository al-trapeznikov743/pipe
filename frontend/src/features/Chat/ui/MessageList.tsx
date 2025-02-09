import {classNames, Typography} from '@/shared';
import {StateMessagesSchema} from '@/features/Chats/model/types/chatsSchema';
import * as s from './Chat.module.scss';

interface MessageListProps {
  chatId: number;
  messages: StateMessagesSchema;
};

const MessageList = ({chatId, messages}: MessageListProps) => (
  <div className={s.messages}>
    {
      chatId ? messages[chatId]
        ?.map(({id, text, time, user: {icon}, showIcon}, idx, arr) => {
          const isEnd = showIcon && idx !== arr.length - 1;

          return (
            <div key={id} className={classNames(s.messagesBlock, {[s.blockEnd]: isEnd})}>
              {
                showIcon && (
                  <div className={classNames('user-icon', {}, [s.messageIcon])}>
                    <img src={icon} />
                  </div>
                )
              }
              <div className={classNames(s.message, {[s.withoutIcon]: !showIcon})}>
                {text}
                <Typography>
                  {time}
                </Typography>
              </div>
            </div>
          );
        }) : []
    }
  </div>
);

export default MessageList;