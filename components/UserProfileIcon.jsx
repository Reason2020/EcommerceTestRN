import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { colors } from '../constants/colors'

const UserProfileIcon = () => {
    const { username } = useContext(UserContext)

  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Text style={styles.userCharacterText}>{username[0].toUpperCase()}</Text>
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