/* ----------------------------- BASIC  IMPORTS ----------------------------- */
import {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
/* ------------------------------- NAVIGATION ------------------------------- */
import {TopStackScreenType} from '../../../navigation/navigationTypes';
import {TOPSCREENS} from '../../../navigation/screens';
/* ---------------------------------- STYLE --------------------------------- */
import {IMAGE} from '../../../assets/image';
import styles from '../style';
/* ---------------------------------- AXIOS ---------------------------------- */
import axios from '../../../api/axios';

interface DataFilms {
  title: string;
  release_date: string;
  episode_id: string;
}

const RelatedFilms: TopStackScreenType<TOPSCREENS.relatedFilms> = ({route}) => {
  const [state, setState] = useState<Array<DataFilms>>([]);
  const {dataHero} = route.params;

  const renderItem = ({item}: {item: DataFilms}) => {
    return (
      <View style={styles.item}>
        <Image
          key={item.episode_id}
          style={styles.imageDetails}
          source={IMAGE.films[item.episode_id] || IMAGE.imagePlaceholder}
        />
        <Text style={styles.title}> {item.title}</Text>
        <Text style={styles.date}> {`Date: ${item.release_date}`}</Text>
      </View>
    );
  };

  useEffect(() => {
    const films = dataHero.films.map(item => {
      return axios.get<DataFilms>(item);
    });
    Promise.all(films)
      .then(res => {
        setState(res.map(item => item.data));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {state.length == 0 ? (
        <View>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text style={styles.emptyComponent}>
              The is no films to this Hero
            </Text>
          }
          contentContainerStyle={{
            justifyContent: 'space-around',
          }}
          data={state}
          renderItem={renderItem}
          keyExtractor={item => item.episode_id}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default RelatedFilms;
