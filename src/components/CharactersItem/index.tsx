/* ------------------------------ BASIC IMPORTS ----------------------------- */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useCallback} from 'react';

/* --------------------------------- STYLES --------------------------------- */
import styles from './styles';
import {IMAGE} from '../../assets/image';
import {ICONS} from '../../assets/icons';
/* ------------------------------- LIBRARIES  ------------------------------- */
import {SvgXml} from 'react-native-svg';

/* ------------------------------- REDUX TYPES ------------------------------ */
import {FormattedHeroesItem} from '../../redux/types/listHeroesTypes';
import {useActions} from '../../redux/hooks/useActions';
import {useTypedSelector} from '../../redux/hooks/useTypedSelector';

interface ItemProps {
  data: FormattedHeroesItem;
}

const CharactersItem: React.FC<ItemProps> = ({data}) => {
  const {maleCounter, femaleCounter, otherCounter} = useTypedSelector(
    state => state.counterReducer,
  );
  const {calculationCounter} = useActions();

  const isLiked =
    maleCounter.includes(data.id) ||
    femaleCounter.includes(data.id) ||
    otherCounter.includes(data.id);

  const icon = isLiked ? ICONS.likeActive : ICONS.like;

  const counterHandler = useCallback(() => {
    calculationCounter({gender: data.gender, id: data.id});
  }, []);

  return (
    <View style={styles.renderItem}>
      <Image style={styles.image} source={IMAGE.characters[data.id]} />

      <View style={styles.textBlock}>
        <Text style={styles.name}>{data.name}</Text>
        <TouchableOpacity
          onPress={counterHandler}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <SvgXml xml={icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CharactersItem;
