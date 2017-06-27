import React from 'react'
import { View, ListView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Metrics, Colors } from '../Themes'


// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/DashboardScreenStyle'
var n = {};

class ListviewSectionsExample extends React.Component {
  constructor (props) {
    super(props)
    console.log(props.state)


    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = {
      first: props.state
    }

    n = props.transition
    // console.log(n)
    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *   The same goes for sectionHeaderHasChanged
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects)
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
  renderRow (rowData, sectionID) {
    // You can condition on sectionID (key as string), for different cells
    // in different sections
    // const { navigate } = this.props.transition

    const myIcon = (<Icon name="microchip" size={50} color="#900" />)
    return (
      <TouchableOpacity style={{
      width: Metrics.screenWidth / 2 - Metrics.doubleBaseMargin,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      margin: Metrics.baseMargin,
      backgroundColor: rowData.color,
      borderRadius: Metrics.smallMargin}}
      onPress={() =>{
        let location = ''
        switch(rowData.mode){
          case 'ADD':
            location = 'AddCustomerScreen'
            break;
          case 'VIEW':
            location = 'ViewCustomersScreen'
            break;
          case 'MANAGE':
            location = 'LaunchScreen'
            break;
          case 'DELETE':
            location = 'LaunchScreen'
            break;
        }
        n.navigate(location, { name: 'Jane' })
      }

      }>
        {/* {myIcon} */}
        <Text style={styles.boldLabel}> {rowData.title}</Text>
        {/* <Text style={styles.label}>{rowData.description}</Text> */}
      </TouchableOpacity>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRowsAndSections` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  renderHeader (data, sectionID) {
    switch (sectionID) {
      case 'first':
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>Dashboard</Text></View>
      default:
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>Second Section</Text></View>
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          onLayout={this.onLayout}
          renderRow={this.renderRow}
          enableEmptySections
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

export default connect(mapStateToProps, mapDispatchToProps)(ListviewSectionsExample)
