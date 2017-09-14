import Navigator from 'native-navigation';
import { SCREENONE, SCREENTWO } from './routes';

Navigator.registerScreen(SCREENONE, () => require('./screens/ScreenOne'));
Navigator.registerScreen(SCREENTWO, () => require('./screens/ScreenTest'));