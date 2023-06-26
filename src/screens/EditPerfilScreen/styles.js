import { Platform, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: THEME.COLORS.BACKGROUND_900
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -2,
    paddingLeft: 10,
    color: "#05375a"
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.PRIMARY_100,
    alignItems: 'center',
    marginTop: 10
  }
});