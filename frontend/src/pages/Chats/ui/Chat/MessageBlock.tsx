import {classNames} from '@/shared';
import {Message} from './Message';
import * as s from '../Chats.module.scss';

interface Message {
  id: number,
  text: string,
  time: string
};

interface MessageBlockProps {
  user: {icon: string};
  messages: Message[];
};

export const MessageBlock = ({user: {icon}, messages}: MessageBlockProps) => {
  return (
    <div className={s.messageBlock}>
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
};