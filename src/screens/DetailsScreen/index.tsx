/* ------------------------------ BASIC IMPORTS ----------------------------- */
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

/* --------------------------------- STYLES --------------------------------- */
import styles from './style';
import {IMAGE} from '../../assets/image';
import {ICONS} from '../../assets/icons';

/* ------------------------------- NAVIGATION ------------------------------- */
import {RootStackScreenType} from '../../navigation/navigationTypes';
import {SCREENS} from '../../navigation/screens';
import TopNavigation from '../../navigation/topNavigation';

/* -------------------------------- LIBRARIES ------------------------------- */
import {SvgXml} from 'react-native-svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DetailsScreen: RootStackScreenType<SCREENS.details> = ({
  route,
  navigation,
}) => {
  const {dataHero} = route.params;
  const {top} = useSafeAreaInsets();

  const navHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.detailsScreen}>
      <View style={[styles.header, {marginTop: top}]}>
        <TouchableOpacity
          style={styles.goBack}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          onPress={navHandler}>
          <SvgXml xml={ICONS.arrow} />
        </TouchableOpacity>
        <Text style={styles.title}>Details Hero</Text>
      </View>
      <View style={styles.heroMainBlock}>
        <Image
          style={styles.heroImage}
          source={IMAGE.characters[dataHero.id]}
        />
        <View style={{flex: 1, marginLeft: 12}}>
          <Text style={styles.heroName}>{dataHero.name}</Text>
          <Text
            style={
              styles.heroDetails
            }>{`Birth Year: ${dataHero.birth_year} `}</Text>
          <Text
            style={styles.heroDetails}>{`Height: ${dataHero.height} cm`}</Text>
          <Text style={styles.heroDetails}>{`Mass: ${dataHero.mass} kg`}</Text>
          <Text style={styles.heroDetails}>{`Gender: ${dataHero.gender}`}</Text>
          <Text
            style={
              styles.heroDetails
            }>{`Skin Color: ${dataHero.skin_color}`}</Text>
          <Text
            style={
              styles.heroDetails
            }>{`Hair Color: ${dataHero.hair_color}`}</Text>
        </View>
      </View>
      <TopNavigation dataHero={dataHero} />
    </View>
  );
};

export default DetailsScreen;
