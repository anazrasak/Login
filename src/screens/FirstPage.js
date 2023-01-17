import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const FirstPage = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.headerText}> HeyAPP </Text>

      <View style={styles.inputBox}>
        <TextInput placeholder='Username'/>
      </View>
      <View style={styles.inputBox}>
        <TextInput placeholder='Email'/>
      </View>
      <View style={styles.inputConatiner}>
      <TextInput placeholder='Password'/>
      </View>

      {/* <Text style={styles.forgetText}>Forget Password?</Text> */}

      <View style={styles.btn}>
      <Text style={styles.loginText}>SIGNUP</Text>

      </View>

      <Text style={styles.forgetText}>Login</Text>



    </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ff5733',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 40
  },
  inputBox: {
    height: 55,
    width: '90%',
    backgroundColor:'white',
    borderRadius: 30,
    padding: 10,
    marginBottom: 20
  },
  inputConatiner : {
    backgroundColor:'white',
    height: 55,
    width: '90%',
    borderRadius: 30,
    padding: 10,
    marginBottom: 20
  },
  forgetText: {
    color: 'black',
    fontWeight: '500'
  },
  btn: {
    height: 55,
    width: '90%',
    backgroundColor:'white',
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  loginText: {
    color: '#1c4966',
    fontWeight: 'bold'
  }
})