import * as s from '../Chats.module.scss';

interface Message {
  text: string,
  time: string
};

export const Message = ({text, time}: Message) => {
  return (
    <div className={s.message}>
      {text}
      {time}
    </div>
  );
};