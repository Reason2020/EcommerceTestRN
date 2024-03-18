import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { Tabs } from 'expo-router'
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { ThemeContext } from '../../contexts/ThemeContext';
import { isLightModeOn } from '../../utils/isLightModeOn';

const TabsLayout = () => {
    const { currentTheme } = useContext(ThemeContext)
    const lightMode = isLightModeOn(currentTheme)

  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
            <View
                intensity={100} 
                style={[ StyleSheet.absoluteFill, {backgroundColor: lightMode ? colors.plainWhite : colors.black}]} />
        )
    }} >
        <Tabs.Screen 
            name='productListings'
            options={{
                tabBarIcon: ({ focused }) => focused ? <Entypo name='home' size={24} color={lightMode ? colors.black : colors.plainWhite} /> : <MaterialCommunityIcons name='home-outline' size={24} color={lightMode ? colors.black : colors.plainWhite} />,
            }} />
        <Tabs.Screen 
            name='userDetails'
            options={{
                tabBarIcon: ({ focused }) => focused ? <FontAwesome name='user-circle' size={24} color={lightMode ? colors.black : colors.plainWhite} /> : <FontAwesome name='user-circle-o' size={24} color={lightMode ? colors.black : colors.plainWhite} />
            }} />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})