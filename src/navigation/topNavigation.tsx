/* -------------------------------- LIBRARIES ------------------------------- */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
/* ---------------------------------- STYLE --------------------------------- */
import {COLORS} from '../assets/colors';
/* --------------------------------- SCREENS -------------------------------- */
import {TOPSCREENS} from './screens';
/* ------------------------------- COMPONENET ------------------------------- */
import RelatedVehicles from '../screens/TopTabScreens/RelatedVehicles';
import RelatedFilms from '../screens/TopTabScreens/RealetedFilms';
import RelatedStarships from '../screens/TopTabScreens/Related Starships';
/* ---------------------------------- REDUX --------------------------------- */
import {FormattedHeroesItem} from '../redux/types/listHeroesTypes';
import {FONT_FAMILIES} from '../assets/fonts';

const Tab = createMaterialTopTabNavigator();

interface TopNavProps {
  dataHero: FormattedHeroesItem;
}

const TopNavigation: React.FC<TopNavProps> = ({dataHero}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: COLORS.yellow, height: 4},
        tabBarActiveTintColor: COLORS.white,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: FONT_FAMILIES.SFProDisplay.medium,
        },
        tabBarStyle: {backgroundColor: COLORS.black},
      }}>
      <Tab.Screen name={TOPSCREENS.relatedFilms}>
        {props => (
          <RelatedFilms
            {...props}
            route={{...props.route, params: {dataHero}}}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name={TOPSCREENS.relatedVehicles}>
        {props => (
          <RelatedVehicles
            {...props}
            route={{...props.route, params: {dataHero}}}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name={TOPSCREENS.relatedStarships}>
        {props => (
          <RelatedStarships
            {...props}
            route={{...props.route, params: {dataHero}}}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TopNavigation;
