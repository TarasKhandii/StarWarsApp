/* ------------------------------ BASIC IMPORTS ------------------------------ */
import {StyleSheet} from 'react-native';

/* -------------------------------- CONSTANTS -------------------------------- */
import {FONT_FAMILIES} from '../../assets/fonts';
import {COLORS} from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.black,
  },
  relatedFilms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  title: {
    fontFamily: FONT_FAMILIES.SFProDisplay.medium,
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 18,
  },
  date: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 14,
  },
  imageDetails: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
    alignSelf: 'center',
  },
  item: {
    width: '50%',
    marginTop: 16,
  },
  emptyComponent: {
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 24,
    fontFamily: FONT_FAMILIES.SFProDisplay.semiBold,
    fontSize: 18,
  },
});

export default styles;
