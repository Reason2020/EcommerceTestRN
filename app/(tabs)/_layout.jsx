import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarShowLabel: false
    }} >
        <Tabs.Screen 
            name='productListings'
            options={{
                tabBarIcon: ({ focused }) => focused ? <Entypo name='home' size={24} color={colors.black} /> : <MaterialCommunityIcons name='home-outline' size={24} color={colors.black} />,
            }} />
        <Tabs.Screen 
            name='userDetails'
            options={{
                tabBarIcon: ({ focused }) => focused ? <FontAwesome name='user-circle' size={24} color={colors.black} /> : <FontAwesome name='user-circle-o' size={24} color={colors.black} />
            }} />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})