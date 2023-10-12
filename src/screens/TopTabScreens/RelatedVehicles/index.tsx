/* ----------------------------- BASIC  IMPORTS ----------------------------- */
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
/* ------------------------------- NAVIGATION ------------------------------- */
import {TopStackScreenType} from '../../../navigation/navigationTypes';
import {TOPSCREENS} from '../../../navigation/screens';
/* ---------------------------------- STYLE --------------------------------- */
import {IMAGE} from '../../../assets/image';
import styles from '../style';
/* ---------------------------------- AXIOS ---------------------------------- */
import axios from '../../../api/axios';
/* ---------------------------------- UTIL ---------------------------------- */
import {getIdFromData} from '../../../util/dataUtils';

interface DataVehicles {
  name: string;
  model: string;
  id: string;
  url: string;
}

const RelatedVehicles: TopStackScreenType<TOPSCREENS.relatedVehicles> = ({
  route,
}) => {
  const [state, setState] = useState<Array<DataVehicles>>([]);
  const [loading, setLoading] = useState(false);
  const {dataHero} = route.params;

  const renderItem = ({item}: {item: DataVehicles}) => {
    return (
      <View style={styles.item}>
        <Image
          key={item.id}
          style={styles.imageDetails}
          source={IMAGE.vehicles[item.id] || IMAGE.imagePlaceholder}
        />
        <Text style={styles.title}> {item.name}</Text>
        <Text style={styles.date}> {`Model: ${item.model}`}</Text>
      </View>
    );
  };

  useEffect(() => {
    setLoading(true);
    const vehicles = dataHero.vehicles.map(item => {
      return axios.get<DataVehicles>(item);
    });
    Promise.all(vehicles)
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
              The is no vehicles to this Hero
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

export default RelatedVehicles;
