import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserDetails = () => {
  return (
    <View style={styles.container}>
      <Text>UserDetails</Text>
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