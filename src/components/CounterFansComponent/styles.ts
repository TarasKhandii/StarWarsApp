/* ------------------------------ BASIC IMPORTS ------------------------------ */
import {StyleSheet} from 'react-native';

/* -------------------------------- CONSTANTS ------------------------------- */
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: 140,
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 12,
    borderRadius: 10,
    marginTop: 22,
  },
  numberFans: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 24,
    color: COLORS.black,
    marginBottom: 8,
  },
  gender: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 14,
    color: COLORS.black,
  },
});

export default styles;
