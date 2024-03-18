import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const UserDetails = () => {
  return (
    <View style={styles.container}>
      <Text>UserDetails</Text>
      <Link href={'/'}>Go to Login</Link>
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})