import { Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Link, router } from 'expo-router'
import UserProfileIcon from '../../components/UserProfileIcon'
import { UserContext } from '../../contexts/UserContext'
import { colors } from '../../constants/colors'
import ThemeChanger from '../../components/ThemeChanger'
import { isLightModeOn } from '../../utils/isLightModeOn'
import { ThemeContext } from '../../contexts/ThemeContext'

const UserDetails = () => {
  //user profile(first character of username)✅
  //username✅
  //theme✅
  //logout✅

  const { username, setUsername, setPassword } = useContext(UserContext)

  const { currentTheme } = useContext(ThemeContext)
  const lightMode = isLightModeOn(currentTheme)

  //logout handler
  const logoutHandler = () => {
    //set user context to default
    //navigate to '/'

    setUsername(''),
    setPassword(''),
    router.navigate('/')
  }

  return (
    <View style={[styles.container, { backgroundColor: lightMode ? colors.plainWhite : colors.black }]}>
      <StatusBar backgroundColor={lightMode ? colors.plainWhite : colors.black} barStyle={lightMode ? 'dark-content' : 'light-content'} />
      <UserProfileIcon />
      <View style={styles.card}>
        <Text style={[styles.usernameText, { color: lightMode ? colors.black : colors.plainWhite }]}>{username}</Text>
      </View>
      <View style={styles.card}>
        <ThemeChanger />
      </View>
      <Pressable
        onPress={logoutHandler}
        style={[styles.button, { backgroundColor: lightMode ? colors.black : colors.plainWhite }]}>
        <Text style={[styles.buttonText, { color: lightMode ? colors.plainWhite : colors.black }]}>Logout</Text>
      </Pressable>
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    gap: 20
  },
  card: {
    padding: 10,
    elevation: 2,
    borderRadius: 2
  },
  usernameText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600'
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.plainWhite
  }
})