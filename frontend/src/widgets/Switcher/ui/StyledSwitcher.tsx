import Switch, {switchClasses} from '@mui/material/Switch';
import {styled} from '@mui/material/styles';
import {SwitcherProps} from './Switcher';

export const StyledSwitcher = styled(Switch)<SwitcherProps>(({
  trackWidth = '34px',
  trackHeight = '14px'
}) => ({
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '36px',
  height: '20px',
  padding: 0,
  '&[class*="disabled"]': {
    opacity: 0.5
  },
  '&[class*="small"]': {
    width: '28px',
    height: '16px',
    '& [class*="MuiSwitch-track"]': {
      width: '28px',
      height: '10px'
    },
    [`& .${switchClasses.switchBase}`]: {
      [`&.${switchClasses.checked}`]: {
        transform: 'translateX(12px)'
      }
    }
  },
  [`& .${switchClasses.switchBase}`]: {
    color: '#4DA6FF', // Светло-голубой для кнопки в неактивном состоянии
    padding: 0,
    [`&.${switchClasses.checked}`]: {
      color: '#1E90FF', // Ярко-голубой для кнопки в активном состоянии
      padding: 0,
      transform: 'translateX(14px)',
      [`& + .${switchClasses.track}`]: {
        backgroundColor: '#87CEFA', // Голубой для трека в активном состоянии
        opacity: 0.5
      },
      '&:hover': {
        color: '#1E90FF',
        backgroundColor: 'transparent'
      },
      [`& .${switchClasses.thumb}`]: {
        border: 'none'
      }
    },
    [`&.${switchClasses.disabled}`]: {
      color: '#B0E0E6', // Бледно-голубой для отключенного состояния
      [`& + .${switchClasses.track}`]: {
        opacity: 1,
        backgroundColor: '#B0E0E6'
      }
    },
    '&:hover': {
      color: '#4DA6FF',
      backgroundColor: 'transparent'
    }
  },
  [`& .${switchClasses.switchBase}.${switchClasses.checked}`]: {
    color: '#1E90FF', // Ярко-голубой для кнопки в активном состоянии
    padding: 0,
    transform: 'translateX(14px)',
    [`& + .${switchClasses.track}`]: {
      backgroundColor: '#87CEEB', // Светло-голубой для трека в активном состоянии
      opacity: 0.5
    },
    '&:hover': {
      color: '#1E90FF',
      backgroundColor: 'transparent'
    }
  },
  [`& .${switchClasses.track}`]: {
    backgroundColor: '#ADD8E6', // Голубой для трека в неактивном состоянии
    opacity: 1,
    width: trackWidth,
    height: trackHeight
  },
  [`& .${switchClasses.thumb}`]: {
    boxShadow: 'none',
    border: `1px solid ${'#4682B4'}` // Темно-голубой для рамки кнопки
  },
  [`& .${switchClasses.sizeSmall}`]: {
    '& [class*="MuiSwitch-switchBase"]': {
      padding: 0
    }
  }
}));