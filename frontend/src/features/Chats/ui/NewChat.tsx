import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {classNames, Typography} from '@/shared';
import * as s from './Chats.module.scss';

interface NewChatProps {
  className?: string;
};

const NewChat = ({className}: NewChatProps) => {
  return (
    <div className={classNames(s.newChat, {}, [className])}>
      <AddCircleOutlineIcon sx={{fontSize: 35}} />
      <Typography>
        {'Создать новый чат'}
      </Typography>
    </div>
  );
};

export default NewChat;