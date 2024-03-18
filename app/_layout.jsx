import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import UserContextProvider from '../contexts/UserContext'

const RootLayout = () => {
  return (
    <UserContextProvider>
      <Stack 
        initialRouteName='index'
        screenOptions={{
            headerShown: false
        }} >
        <Stack.Screen name='index' />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='products/[id]' />
      </Stack>
    </UserContextProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})