import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import UserContextProvider from '../contexts/UserContext'
import ThemeContextProvider from '../contexts/ThemeContext'
import SelectedCategoryContextProvider from '../contexts/selectedCategoryContext'
import CartContextProvider from '../contexts/CartContext'

const RootLayout = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <SelectedCategoryContextProvider>
          <CartContextProvider>
            <Stack 
              initialRouteName='index'
              screenOptions={{
                  headerShown: false
              }} >
              <Stack.Screen name='index' />
              <Stack.Screen name='(tabs)' />
              <Stack.Screen name='products/[id]' />
            </Stack>
          </CartContextProvider>
        </SelectedCategoryContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})