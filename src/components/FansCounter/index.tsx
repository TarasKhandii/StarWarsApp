/* ------------------------------ BASIC IMPORTS ----------------------------- */
import {Text, View} from 'react-native';

/* --------------------------------- STYLES --------------------------------- */
import styles from './styles';

interface CounterProps {
  gender: string;
  numberFans: number;
}

const FansCounter: React.FC<CounterProps> = ({gender, numberFans}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberFans}>{numberFans}</Text>
      <Text style={styles.gender}>{gender}</Text>
    </View>
  );
};

export default FansCounter;
