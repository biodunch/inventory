// import React from 'react'
// // var t = require('tcomb-form-native');
// import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
//
// var Form = t.form.Form;
// import Customer from '../models/Customers'
//
// var options = {}; // optional rendering options (see documentation)
//
// // const dd = () =>
// export default class AddCustomer extends React.Component{
//
//   onPress() {
//     // call getValue() to get the values of the form
//     var value = this.refs.form.getValue();
//     if (value) { // if validation fails, value will be null
//       console.log(value); // value here is an instance of Person
//     }
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* display */}
//         <Form
//           ref="form"
//           type={Customer}
//           options={options}
//         />
//         <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
//
// var styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     marginTop: 50,
//     padding: 20,
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     fontSize: 30,
//     alignSelf: 'center',
//     marginBottom: 30
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'white',
//     alignSelf: 'center'
//   },
//   button: {
//     height: 36,
//     backgroundColor: '#48BBEC',
//     borderColor: '#48BBEC',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignSelf: 'stretch',
//     justifyContent: 'center'
//   }
// });
