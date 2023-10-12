import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {TopStackScreenType} from '../../../navigation/navigationTypes';
import {TOPSCREENS} from '../../../navigation/screens';
import {useEffect, useState} from 'react';
import {IMAGE} from '../../../assets/image';
import axios from '../../../api/axios';
import {getIdFromData} from '../../../util/dataUtils';
import styles from '../style';

interface DataStarShips {
  name: string;
  model: string;
  id: string;
  url: string;
}
const RelatedStarships: TopStackScreenType<TOPSCREENS.relatedStarships> = ({
  route,
}) => {
  const [state, setState] = useState<Array<DataStarShips>>([]);
  const [loading, setLoading] = useState(false);
  const {dataHero} = route.params;

  const renderItem = ({item}: {item: DataStarShips}) => {
    return (
      <View style={styles.item}>
        <Image
          key={item.id}
          style={styles.imageDetails}
          source={IMAGE.starships[item.id] || IMAGE.imagePlaceholder}
        />
        <Text style={styles.title}> {item.name}</Text>
        <Text style={styles.date}> {`Model: ${item.model}`}</Text>
      </View>
    );
  };

  useEffect(() => {
    setLoading(true);
    const starships = dataHero.starships.map(item => {
      return axios.get<DataStarShips>(item);
    });
    Promise.all(starships)
      .then(res => {
        setState(
          res.map(item => ({
            ...item.data,
            id: getIdFromData(item.data.url),
          })),
        );
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text style={styles.emptyComponent}>
              The is no starships to this Hero
            </Text>
          }
          contentContainerStyle={{
            justifyContent: 'space-around',
          }}
          data={state}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default RelatedStarships;
