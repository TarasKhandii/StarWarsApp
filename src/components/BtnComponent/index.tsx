/* ------------------------------ BASIC IMPORTS ----------------------------- */
import {Text, TouchableOpacity} from 'react-native';

/* --------------------------------- STYLES --------------------------------- */
import styles from './styles';

interface BtnProps {
  title: string;
  onPress?: () => void;
}

const BtnComponent: React.FC<BtnProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BtnComponent;
