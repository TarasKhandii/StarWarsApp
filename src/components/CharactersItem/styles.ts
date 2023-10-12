/* ------------------------------ BASIC IMPORTS ----------------------------- */
import {StyleSheet} from 'react-native';

/* -------------------------------- CONSTANTS ------------------------------- */
import {FONT_FAMILIES} from '../../assets/fonts';
import {COLORS} from '../../assets/colors';

const styles = StyleSheet.create({
  renderItem: {
    backgroundColor: COLORS.yellow,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  image: {
    marginTop: 20,
    width: 300,
    height: 300,
    objectFit: 'contain',
    marginBottom: 20,
  },
  textBlock: {
    marginHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    fontFamily: FONT_FAMILIES.SFProDisplay.medium,
    fontSize: 18,
    color: COLORS.black,
  },
});
export default styles;
