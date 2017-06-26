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
        <Form>
          <FieldsContainer>
            <Fieldset label="Contact details" style={{backgroundColor:'red'}}>
              <FormGroup >
                <Label>First name</Label>
                <Input placeholder="Esben" onChangeText={this.onFirstNameChange} />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input placeholder="esbenspetersen@gmail.com" onChangeText={this.onEmailChange} />
              </FormGroup>
            </Fieldset>
            <Fieldset label="Password" last>
              <FormGroup>
                <Label>Password</Label>
                <Input placeholder="Enter a password" onChangeText={this.onPasswordChange} />
              </FormGroup>
              <FormGroup>
                <Label>Repeat password</Label>
                <Input placeholder="Repeat your password" onChangeText={this.onRepeatPasswordChange} />
              </FormGroup>
              <FormGroup border={false}>
                <Label>Save my password</Label>
                <Switch onValueChange={this.toggleSaveMyPassword} />
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
