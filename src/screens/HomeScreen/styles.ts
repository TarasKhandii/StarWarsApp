/* ------------------------------ BASIC IMPORTS ------------------------------ */
import {StyleSheet} from 'react-native';

/* -------------------------------- CONSTANTS -------------------------------- */
import {FONT_FAMILIES} from '../../assets/fonts';
import {COLORS} from '../../assets/colors';

const styles = StyleSheet.create({
  homeScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.black,
  },

  title: {
    alignSelf: 'center',
    marginTop: 22,
    marginBottom: 42,
    fontFamily: FONT_FAMILIES.SFProDisplay.bold,
    fontSize: 32,
    color: COLORS.yellow,
  },
  btnBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    alignItems: 'center',
  },

  subTitle: {
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.SFProDisplay.medium,
    fontSize: 26,
  },
  counterBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  blockSecondPart: {
    alignSelf: 'center',
  },
  loader: {
    alignItems: 'center',
    marginTop: 50,
    flex: 1,
  },
});

export default styles;
