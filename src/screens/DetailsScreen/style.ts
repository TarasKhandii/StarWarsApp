/* ------------------------------ BASIC IMPORTS ------------------------------ */
import {StyleSheet} from 'react-native';

/* -------------------------------- CONSTANTS -------------------------------- */
import {FONT_FAMILIES} from '../../assets/fonts';
import {COLORS} from '../../assets/colors';

const styles = StyleSheet.create({
  detailsScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.black,
  },
  goBack: {
    transform: [{rotate: '180deg'}],
    position: 'absolute',
    left: 16,
    color: COLORS.white,
  },
  header: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: FONT_FAMILIES.SFProDisplay.bold,
    fontSize: 24,
    color: COLORS.yellow,
    alignSelf: 'center',
  },
  heroMainBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  heroImage: {
    width: 180,
    height: 180,
    backgroundColor: COLORS.yellow,
    objectFit: 'contain',
    borderRadius: 10,
    paddingVertical: 10,
  },
  heroName: {
    fontFamily: FONT_FAMILIES.SFProDisplay.semiBold,
    fontSize: 20,
    marginBottom: 3,
    color: COLORS.white,
    width: '100%',
  },
  heroDetails: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 16,
    marginBottom: 3,
    color: COLORS.white,
  },
});

export default styles;
