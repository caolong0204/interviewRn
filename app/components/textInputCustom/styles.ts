import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: '#000',
    padding: 8,
    borderBottomColor: 'transparent',
    fontSize: 14,
    letterSpacing: 1,
  },
  containerInput: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  inputError: {
    borderColor: '#DB433D',
    borderWidth: 1,
  },
  multiline: {
    height: 90,
    paddingTop: 10,
  },
});
