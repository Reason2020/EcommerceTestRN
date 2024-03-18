import { ActivityIndicator, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router'
import { colors } from '../constants/colors'
import { UserContext } from '../contexts/UserContext'

const Login = () => {
  const [ usernameText, setUsernameText ] = useState('')
  const [ passwordText, setPasswordText ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)
  const [ errorText, setErrorText ] = useState('')

  const { setUsername, setPassword } = useContext(UserContext)


  //dummy login procedure
  const loginHandler = () => {
    //delay 3 seconds for log in simulation
    //set user context
    //navigate to product listings page
    if (!usernameText || !passwordText) {
      setErrorText('All Fields Must Be Filled')
      //remove error text after 3seconds
      setTimeout(() => {
        setErrorText('')
      }, 3000)
      return
    }
    setIsLoading(true)
    
    setTimeout(() => {
      setUsername(usernameText)
      setPassword(passwordText)
      setIsLoading(false)
      router.navigate('/productListings')
    }, 3000)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.black} />
      <View style={styles.formContainer}>
        <View style={styles.formTitleContainer}>
          <Text style={styles.primaryFormTitle}>Hello, Welcome To MyCommerce!👋</Text>
          <Text style={styles.secondaryFormTitle}>You've been missed!</Text>
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput 
            placeholder='user123'
            style={styles.inputField}
            value={usernameText}
            onChangeText={(newUsername) => setUsernameText(newUsername)}
          />
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput 
            placeholder='Your password'
            style={styles.inputField}
            secureTextEntry={true}
            value={passwordText}
            onChangeText={(newPassword) => setPasswordText(newPassword)}
          />
        </View>
        <Pressable
          onPress={loginHandler} 
          style={styles.button}>
            {isLoading && <ActivityIndicator size='large' color={colors.plainWhite} />}
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
      </View>   
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  formContainer: {
    gap: 10
  },
  formTitleContainer: {},
  primaryFormTitle: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600'
  },
  secondaryFormTitle: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '400'
  },
  inputSection: {

  },
  inputLabel: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500'
  },
  inputField: {
    borderWidth: 1,
    borderColor: colors.black,
    padding: 10,
    borderRadius: 10
  },
  button: {
    backgroundColor: colors.black,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: colors.plainWhite,
    fontSize: 16,
    fontWeight: '600'
  },
  errorText: {
    color: colors.red,
    fontSize: 14,
    fontWeight: '700'
  }
})