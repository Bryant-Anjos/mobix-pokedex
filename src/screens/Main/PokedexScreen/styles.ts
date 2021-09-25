import { StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

const styles = StyleSheet.create({
  keyboardView: {
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 25,
    height: '100%',
    backgroundColor: Colors.white,
  },
  logo: {
    width: 117,
    height: 41,
    marginTop: 17,
    marginBottom: 24,
  },
  search: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  icon: {
    marginRight: -10,
  },
})

export default styles
