import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown: false
    }} >
        <Tabs.Screen 
            name='productListings'
            options={{
                title: 'Product Listings'
            }} />
        <Tabs.Screen 
            name='userDetails'
            options={{
                title: 'User Details',
            }} />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})