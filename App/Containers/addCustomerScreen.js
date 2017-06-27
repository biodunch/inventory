import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Input,
  Label,
  Switch
} from 'react-native-clean-form'
// Styles
import styles from './Styles/AddCustomerScreenStyle'

class AddCustomerScreen extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Form >
          <FieldsContainer style={{marginTop:30}}>
            <Fieldset label="Customer Details" style={{backgroundColor:'red'}}>
              <FormGroup >
                <Label>Customer name</Label>
                <Input placeholder="Esben" onChangeText={this.onFirstNameChange} />
              </FormGroup>
              <FormGroup>
                <Label>Entry Date</Label>
                <Input placeholder="esbenspetersen@gmail.com" onChangeText={this.onEmailChange} />
              </FormGroup>
              <FormGroup>
                <Label>FSM</Label>
                <Input placeholder="FSM" onChangeText={this.onEmailChange} />
              </FormGroup>
              <FormGroup>
                <Label>Location</Label>
                <Input placeholder="Oyo " onChangeText={this.onEmailChange} />
              </FormGroup>
              <FormGroup>
                <Label>Phone Number</Label>
                <Input placeholder="0123456789" onChangeText={this.onEmailChange} />
              </FormGroup>
              <FormGroup>
                <Label>R O</Label>
                <Input placeholder="R O" onChangeText={this.onEmailChange} />
              </FormGroup>
              <FormGroup>
                <Label>State</Label>
                <Input placeholder="Lagos" onChangeText={this.onEmailChange} />
              </FormGroup>
            </Fieldset>
          </FieldsContainer>
          <ActionsContainer>
            <Button icon="md-checkmark" iconPlacement="right" onPress={this.save}>Save</Button>
          </ActionsContainer>
        </Form>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomerScreen)
