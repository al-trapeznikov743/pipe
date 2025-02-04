import {classNames, ListItem, Typography, useAppDispatch} from '@/shared';
import {chatsActions} from '../model/slice/chatsSlice';
import * as s from './Chats.module.scss';
import {AppDispatch} from '@/app/providers/StoreProvider';

interface ChatItemProps {
  id: number;
  icon: string;
  label: string;
  lastMessage: string;
};

const setChat = (dispatch: AppDispatch, chatId: number) => {
  dispatch(chatsActions.setChatId(chatId)); 
};

export const ChatItem = ({id, icon, label, lastMessage}: ChatItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <ListItem onClick={() => setChat(dispatch, id)}>
      <div className={classNames('user-icon', {}, [s.chatIcon])}>
        <img src={icon} />
      </div>
      <div className={s.chatInfo}>
        <Typography>{label}</Typography>
        <Typography>{lastMessage}</Typography>
      </div>
    </ListItem>
  );
};