import { ActivityIndicator, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router'
import { colors } from '../constants/colors'
import { UserContext } from '../contexts/UserContext'
import { ThemeContext } from '../contexts/ThemeContext'
import { isLightModeOn } from '../utils/isLightModeOn'

const Login = () => {
  const [ usernameText, setUsernameText ] = useState('')
  const [ passwordText, setPasswordText ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)
  const [ errorText, setErrorText ] = useState('')

  const { setUsername, setPassword } = useContext(UserContext)

  const { currentTheme } = useContext(ThemeContext)
  const lightMode = isLightModeOn(currentTheme)

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
      //clear out the fields
      setUsernameText('')
      setPasswordText('')
      router.navigate('/productListings')
    }, 3000)
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: lightMode ? colors.plainWhite : colors.black }]}>
      <StatusBar backgroundColor={lightMode ? colors.plainWhite : colors.black} barStyle={lightMode ? 'dark-content' : 'light-content'} />
      <View style={styles.formContainer}>
        <View style={styles.formTitleContainer}>
          <Text style={[styles.primaryFormTitle, { color: lightMode ? colors.black : colors.plainWhite }]}>Hello, Welcome To MyCommerce!👋</Text>
          <Text style={[styles.secondaryFormTitle, { color: lightMode ? colors.black : colors.plainWhite }]}>You've been missed!</Text>
        </View>
        <View style={styles.inputSection}>
          <Text style={[styles.inputLabel, { color: lightMode ? colors.black : colors.plainWhite }]}>Username</Text>
          <TextInput 
            placeholder='user123'
            style={[styles.inputField, { backgroundColor: lightMode ? colors.black : colors.plainWhite, color: lightMode ? colors.plainWhite : colors.black }]}
            value={usernameText}
            placeholderTextColor={lightMode ? colors.plainWhite : colors.black}
            onChangeText={(newUsername) => setUsernameText(newUsername)}
          />
        </View>
        <View style={styles.inputSection}>
          <Text style={[styles.inputLabel, { color: lightMode ? colors.black : colors.plainWhite }]}>Password</Text>
          <TextInput 
            placeholder='Your password'
            style={[styles.inputField, { backgroundColor: lightMode ? colors.black : colors.plainWhite, color: lightMode ? colors.plainWhite : colors.black }]}
            secureTextEntry={true}
            value={passwordText}
            onChangeText={(newPassword) => setPasswordText(newPassword)}
            placeholderTextColor={lightMode ? colors.plainWhite : colors.black}
          />
        </View>
        <Pressable
          onPress={loginHandler} 
          style={[styles.button, { backgroundColor: lightMode ? colors.black : colors.plainWhite }]}>
            {isLoading && <ActivityIndicator size='large' color={lightMode ? colors.plainWhite : colors.black} />}
          <Text style={[styles.buttonText, { color: lightMode ? colors.plainWhite : colors.black }]}>Login</Text>
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
    fontSize: 18,
    fontWeight: '600'
  },
  secondaryFormTitle: {
    fontSize: 15,
    fontWeight: '400'
  },
  inputSection: {

  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500'
  },
  inputField: {
    padding: 10,
    borderRadius: 10
  },
  button: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600'
  },
  errorText: {
    color: colors.red,
    fontSize: 14,
    fontWeight: '700'
  }
})