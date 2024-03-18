import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import UserContextProvider from '../contexts/UserContext'
import ThemeContextProvider from '../contexts/ThemeContext'

const RootLayout = () => {
  return (
    <ThemeContextProvider>
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
    </ThemeContextProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})