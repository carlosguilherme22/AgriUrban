import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_900
  },
  userInfo: {
    paddingHorizontal: 30,
    marginBottom: 25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.COLORS.CAPTION_500
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: THEME.COLORS.CAPTION_400
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  rowText:{
    fontSize: 14,
    fontWeight: '500',
    color: THEME.COLORS.CAPTION_400,
    marginLeft: 10
  },
  menuItem: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 30
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: THEME.COLORS.CAPTION_500
  },
  editProfileButton: {
    position: 'absolute',
    top: 35,
    right: 20
  }
});