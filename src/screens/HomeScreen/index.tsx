/* ------------------------------ BASIC IMPORTS ----------------------------- */
import {Text, SafeAreaView, View, ActivityIndicator} from 'react-native';

/* --------------------------------- STYLES --------------------------------- */
import styles from './styles';

/* ------------------------------- NAVIGATION ------------------------------- */
import {RootStacksScreenType} from '../../navigation/navigationTypes';
import {SCREENS} from '../../navigation/screens';

/* ------------------------------- COMPONENTS ------------------------------- */
import BtnComponent from '../../components/BtnComponent';
import CounterFansComponent from '../../components/CounterFansComponent';
import {useEffect} from 'react';
import {useActions} from '../../redux/hooks/useActions';
import {useTypedSelector} from '../../redux/hooks/useTypedSelector';
import {COLORS} from '../../assets/colors';

const HomeScreen: RootStacksScreenType<SCREENS.home> = ({navigation}) => {
  //   const navHandler = () => {
  //     navigation.navigate(SCREENS.details);
  //   };
  const {fetchListHeroes} = useActions();
  const {res, loading} = useTypedSelector(state => state.listHeroes);

  useEffect(() => {
    fetchListHeroes();
  }, []);
  return (
    <SafeAreaView style={styles.homeScreen}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Star Wars</Text>
          <View style={styles.btnBlock}>
            <Text style={styles.subTitle}>Fans</Text>
            <BtnComponent title="CLEAR FANS" />
          </View>
          <View style={styles.counterBlock}>
            <CounterFansComponent gender="Female Fans" numberFans={0} />
            <CounterFansComponent gender="Male Fans" numberFans={0} />
          </View>
          <View style={styles.blockSecondPart}>
            <CounterFansComponent gender="Other" numberFans={0} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
