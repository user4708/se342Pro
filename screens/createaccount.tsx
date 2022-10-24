import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import styles from '../shared/styles';

export default function createAccountScreen({ navigation }) {

  const [user, inputUser] = React.useState("Username");
  const [pass, inputPass] = React.useState("Password");
  const [validPass, inputValidPass] = React.useState("Confirm Password");
  const [fName, inputFName] = React.useState("First Name");
  const [lName, inputLName] = React.useState("Last Name");
  const [mInit, inputMInit] = React.useState("Middle Initial");
  const [bDay, inputbDay] = React.useState("Birth Date");

  const pressHandler = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <View style={styles.createAccountOutline}>
        <Image style={styles.createAccImage} source={require('../assets/cloudupload.png')}/>
        <Text style={styles.titleText}>Registration</Text>
        <View style={styles.horizontalLine}></View>
        <TextInput 
          style={styles.input1}
          onChangeText={inputFName}
          placeholder={fName}
        />
        <TextInput 
          style={styles.input1}
          onChangeText={inputMInit}
          placeholder={mInit}
        />
        <TextInput 
          style={styles.input1}
          onChangeText={inputLName}
          placeholder={lName}
        />
        <TextInput 
          style={styles.input1}
          onChangeText={inputbDay}
          placeholder={bDay}
        />
        <Text style={styles.headerText}>Account Information</Text>
        <View style={styles.horizontalLine}></View>
        <TextInput 
          style={styles.input1}
          onChangeText={inputUser}
          placeholder={user}
        />
        <TextInput 
          style={styles.input1}
          onChangeText={inputPass}
          placeholder={pass}
        />
        <TextInput 
          style={styles.input1}
          onChangeText={inputValidPass}
          placeholder={validPass}
        />
        <TouchableOpacity style={styles.loginButton} onPress={pressHandler}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.createNewText}>Returning User?</Text>
        <TouchableOpacity onPress={pressHandler}>
          <Text style={styles.clickableText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
