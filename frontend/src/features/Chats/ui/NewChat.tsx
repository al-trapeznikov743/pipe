import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {classNames} from '@/shared';
import * as s from './Chats.module.scss';

interface NewChatProps {
  className?: string;
};

const NewChat = ({className}: NewChatProps) => {
  return (
    <div className={classNames(s.newChat, {}, [className])}>
      <AddCircleOutlineIcon sx={{fontSize: 35}} />
      {'Создать новый чат'}
    </div>
  );
};

export default NewChat;