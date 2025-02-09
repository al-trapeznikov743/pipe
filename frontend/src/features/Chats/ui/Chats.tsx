import Sidebar from '@/widgets/Sidebar';
import {ChatItem} from './ChatItem';
import {useCallback, useEffect} from 'react';
import {DynamicModuleLoader, ListItem, ReducersList, useAppDispatch} from '@/shared';
import {getChats} from '../model/services/getChats';
import {getChatsData} from '../model/selectors';
import {useSelector} from 'react-redux';
import {chatsReducer} from '../model/slice/chatsSlice';
import NewChat from './NewChat';
import * as s from './Chats.module.scss';

const initReducers: ReducersList = {
  chats: chatsReducer
};

const Chats = () => {
  const dispatch = useAppDispatch();

  const chats = useSelector(getChatsData);
  // const isLoading = useSelector(getChatsIsLoading);
  // const error = useSelector(getChatsError);

  // console.log('chats: ', chats);

  useEffect(() => {
    dispatch(getChats());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initReducers} isRemoveUnmount>
      <Sidebar className={s.chatList}>
        <ListItem className={s.newChatButton}>
          <NewChat />
        </ListItem>
        {
          chats.map(({id, icon, label, lastMessage}) => {
            return (
              <ChatItem
                key={id}
                id={id}
                icon={icon}
                label={label}
                lastMessage={lastMessage}
              />
            );
          })
        }
      </Sidebar>
    </DynamicModuleLoader>
  );
};

export default Chats;