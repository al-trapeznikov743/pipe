import * as s from './Message.module.scss';

interface Message {
  text: string,
  time: string
};

const Message = ({text, time}: Message) => {
  return (
    <div className={s.message}>
      {text}
      {time}
    </div>
  );
};

export default Message;