/* ------------------------------ BASIC IMPORTS ----------------------------- */
import {
  Text,
  SafeAreaView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useEffect} from 'react';

/* --------------------------------- STYLES --------------------------------- */
import styles from './styles';

/* ------------------------------- NAVIGATION ------------------------------- */
import {RootStackScreenType} from '../../navigation/navigationTypes';
import {SCREENS} from '../../navigation/screens';

/* ------------------------------- COMPONENTS ------------------------------- */
import Button from '../../components/Button';
import FansCounter from '../../components/FansCounter';
import CharactersItem from '../../components/CharactersItem';

/* ---------------------------------- REDUX --------------------------------- */
import {useActions} from '../../redux/hooks/useActions';
import {useTypedSelector} from '../../redux/hooks/useTypedSelector';
import {FormattedHeroesItem} from '../../redux/types/listHeroesTypes';

const HomeScreen: RootStackScreenType<SCREENS.home> = ({navigation}) => {
  const {fetchListHeroes, clearFansAction} = useActions();
  const {res, loading} = useTypedSelector(state => state.listHeroes);
  const {maleCounter, femaleCounter, otherCounter} = useTypedSelector(
    state => state.counterReducer,
  );
  const navHandler = (item: FormattedHeroesItem) => {
    navigation.navigate(SCREENS.details, {dataHero: item});
  };

  const renderItem = ({item}: {item: FormattedHeroesItem}) => {
    return (
      <TouchableOpacity onPress={() => navHandler(item)}>
        <CharactersItem data={item} />
      </TouchableOpacity>
    );
  };
  const handlerClearFans = () => {
    clearFansAction();
  };

  useEffect(() => {
    fetchListHeroes();
  }, []);

  return (
    <SafeAreaView style={styles.homeScreen}>
      {!res?.results ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Star Wars</Text>
          <View style={styles.btnBlock}>
            <Text style={styles.subTitle}>Fans</Text>
            <Button title="CLEAR FANS" onPress={handlerClearFans} />
          </View>
          <View style={styles.counterBlock}>
            <FansCounter
              gender="Female Fans"
              numberFans={femaleCounter.length}
            />
            <FansCounter gender="Male Fans" numberFans={maleCounter.length} />

            <FansCounter gender="Other" numberFans={otherCounter.length} />
          </View>
          <FlatList
            contentContainerStyle={{alignItems: 'center'}}
            data={res?.results}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={true}
            horizontal={true}
            keyExtractor={item => item.id}
            onEndReached={() => {
              const nextPage = Number(res?.next.split('page=')[1]);
              nextPage !== 9 && !loading && fetchListHeroes(nextPage);
            }}
            onEndReachedThreshold={4}
            ListFooterComponent={() =>
              loading && <ActivityIndicator color="white" size="large" />
            }
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
