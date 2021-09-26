import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

const { width } = Dimensions.get('window')
const size = width / 4

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  childWrapper: {
    flexDirection: 'column',
  },
  container: {
    height: size,
    width: size,
    borderRadius: size,
    marginVertical: 10,
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    bottom: 10,
  },
  label: {
    color: Colors.white,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    bottom: 10,
  },
  touchable: {
    width: '100%',
    height: '100%',
  },
})

export default styles
