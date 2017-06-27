import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'flex-start',
    margin : 20,
    borderBottomWidth:1,
    borderColor:Colors.frost
    // alignItems:'justify'
  },
  cell:{
    flex: 1,
    flexDirection: 'row',
    marginVertical: Metrics.smallMargin,
    justifyContent: 'flex-start',
    margin : 20,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.coal
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
