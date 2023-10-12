/* ------------------------------ BASIC IMPORT ------------------------------ */
import {StyleSheet} from 'react-native';

/* -------------------------------- CONSTANTS ------------------------------- */
import {FONT_FAMILIES} from '../../assets/fonts';
import {COLORS} from '../../assets/colors';

const styles = StyleSheet.create({
  btn: {
    width: 150,
    height: 50,
    borderWidth: 2,
    borderColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
  title: {
    fontFamily: FONT_FAMILIES.SFProDisplay.medium,
    fontSize: 20,
    color: COLORS.white,
  },
});

export default styles;
