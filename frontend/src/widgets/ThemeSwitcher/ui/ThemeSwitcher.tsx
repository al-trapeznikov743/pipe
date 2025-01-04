import {LightMode, NightsStay} from '@mui/icons-material';
import {useTheme} from '@/app/providers/ThemeProvider';
import {Theme} from '@/app/providers/ThemeProvider/lib/ThemeContext';
import Switcher from '@/widgets/Switcher';

export const ThemeSwitcher = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Switcher
      checked={theme === Theme.DARK}
      onChange={toggleTheme}
      icon={<LightMode fontSize={'small'} />}
      checkedIcon={<NightsStay fontSize={'small'} />}
      trackHeight={'21px'}
    />
  );
};