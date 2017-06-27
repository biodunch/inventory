import React from 'react'
import { View, Text, ListView, TouchableOpacity, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'


// For empty lists
// import AlertMessage from '../Components/AlertMessage'
// Styles
import styles from './Styles/ViewProductScreenStyle'

import _ from 'lodash';
var arr = require('../sch.js')



arry = arr.split('\n');
var jsonObj = [];
var headers = arry[0].split(',');
// console.log(headers)
for(var i = 1; i < arry.length; i++) {
  var data = arry[i].split(',');
  var obj = {};
  for(var j = 0; j < data.length; j++) {
    // console.log(headers[j])
    if(headers[j]){
      obj[headers[j].trim()] = data[j].trim();
    }

  }
  jsonObj.push(obj);
}
JSON.stringify(jsonObj);
console.log(jsonObj)

class ViewCustomersScreen extends React.Component {
  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/


    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(jsonObj)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData) {
    return (
      <TouchableOpacity style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.label}>{rowData.Status}</Text>
        </View>
        <View style={styles.cell}>
        <Text style={styles.label}>{rowData.configration}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.label}>{rowData.weight}</Text>
        </View>
        <Icon size={10} name='chevron-right' style={{color:'blue',marginTop:5}} />

        {/*<View>
        <Text style={styles.boldLabel}>{rowData.RO}</Text>
      </View>
      <View>
        <Text style={styles.boldLabel}>{rowData.Region}</Text>
      </View>
      <View>
        <Text style={styles.boldLabel}>{rowData.Location}</Text>
      </View> */}
      </TouchableOpacity>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  renderFooter = () => {
    return (
      <Text> - Footer - </Text>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'#4075C0'}}>
          <Text style={{textAlign:'center',marginTop:20,marginBottom:20, fontWeight:'600',
          fontSize:20, color: 'white'}}>List of Products</Text>
        </View>

        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
          enableEmptySections
          pageSize={15}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCustomersScreen)
