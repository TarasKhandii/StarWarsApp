/* ------------------------------- NAVIGATION ------------------------------- */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigationTypes';
/* ---------------------------- SCREENS & COMPONENTS --------------------------- */
import {SCREENS} from './screens';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
/* --------------------------------- ASSETS --------------------------------- */
import {COLORS} from '../assets/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: COLORS.black},
        navigationBarColor: COLORS.black,
      }}
      initialRouteName={SCREENS.home}>
      <Stack.Screen name={SCREENS.home} component={HomeScreen} />
      <Stack.Screen name={SCREENS.details} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
