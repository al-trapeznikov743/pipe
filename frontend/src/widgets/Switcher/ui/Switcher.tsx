import {StyledSwitcher} from './StyledSwitcher';
import {SwitchProps} from '@mui/material';

export interface SwitcherProps extends SwitchProps {
  trackWidth?: string;
  trackHeight?: string;
}

export const Switcher = (props: SwitcherProps) => {
  return <StyledSwitcher defaultChecked {...props} />;
}