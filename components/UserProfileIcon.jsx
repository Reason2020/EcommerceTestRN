import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { colors } from '../constants/colors'
import { ThemeContext } from '../contexts/ThemeContext'
import { isLightModeOn } from '../utils/isLightModeOn'

const UserProfileIcon = () => {
    const { username } = useContext(UserContext)

    const { currentTheme } = useContext(ThemeContext)
    const lightMode = isLightModeOn(currentTheme)

  return (
    <View style={styles.container}>
        <View style={[styles.profileContainer, { backgroundColor: lightMode ? colors.black : colors.plainWhite }]}>
          <Text style={[styles.userCharacterText, { color: lightMode ? colors.plainWhite : colors.black }]}>{username[0].toUpperCase()}</Text>
        </View>
    </View>
  )
}

export default UserProfileIcon

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    profileContainer: {
        height: 150,
        width: 150,
        borderRadius: 75,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userCharacterText: {
        color: colors.plainWhite,
        fontSize: 34,
        fontWeight: '900'
    }
})