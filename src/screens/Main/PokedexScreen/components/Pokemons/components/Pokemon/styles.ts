import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: width * 0.27,
    width: '46%',
    marginVertical: 30,
    marginHorizontal: '2%',
    borderRadius: 20,
    padding: 12,
  },
  label: {
    alignItems: 'center',
    padding: 2,
    backgroundColor: '#676767',
    borderRadius: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
})

export default styles
