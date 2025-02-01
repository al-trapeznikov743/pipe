import {classNames, ListItem} from '@/shared';
import * as s from './Chats.module.scss';

interface ChatItemProps {
  icon: string;
  label: string;
  lastMessage: string;
};

export const ChatItem = ({icon, label, lastMessage}: ChatItemProps) => {
  return (
    <ListItem>
      <div className={classNames(s.icon, {}, [s.chatIcon])}>
        <img src={icon} />
      </div>
      <div className={s.chatInfo}>
        <div>{label}</div>
        <div>{lastMessage}</div>
      </div>
    </ListItem>
  );
};