import TextField, {TextFieldProps} from '@mui/material/TextField';
import {styled} from '@mui/material/styles';

export const StyledInput = styled(TextField)<TextFieldProps>(({}) => ({
 '& .MuiInputBase-input': {
    padding: '10px 12px', // Отступы внутри инпута
    color: 'transparent', // Основной текст делаем прозрачным
    fontSize: '14px', // Размер текста
    lineHeight: '20px', // Высота строки
    backgroundColor: 'transparent', // Прозрачный фон, наследуемый от контейнера
    border: 'none', // Убираем границу
    outline: 'none', // Убираем стандартный outline
    height: 'auto', // Высота под контент
    '&:hover, &:focus': {
      color: '#ffffff', // Показываем текст только при наведении или фокусе
      cursor: 'text', // Указываем, что поле доступно для ввода
    },
    '&::placeholder': {
      color: '#080d09', // Серый цвет плейсхолдера
      opacity: 1, // Полная видимость плейсхолдера
    },
  },
  '& .MuiOutlinedInput-root': {
    padding: 0, // Убираем лишние отступы
    backgroundColor: 'transparent', // Прозрачный фон
    border: 'none', // Убираем границы
    boxShadow: 'none', // Убираем любые тени
  },
  '& .MuiInput-underline': {
    '&:before, &:after': {
      display: 'none', // Убираем underline
    },
  }
}));