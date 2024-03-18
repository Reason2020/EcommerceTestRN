import { Pressable, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../constants/colors'
import { ThemeContext } from '../contexts/ThemeContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ThemeChanger = () => {
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

    const isLightModeOn = currentTheme === 'light'

  return (
    <Pressable
        onPress={() => setCurrentTheme(isLightModeOn ? 'dark' : 'light')}  
        style={[
            styles.container, 
            { 
                backgroundColor: isLightModeOn ? colors.black : colors.plainWhite,
                justifyContent: isLightModeOn ? 'flex-start' : 'flex-end' 
            }
        ]}>
      <View
        style={[styles.themeIconContainer, { backgroundColor: isLightModeOn ? colors.plainWhite : colors.black }]}>
        <MaterialCommunityIcons name={ isLightModeOn ? 'white-balance-sunny' : 'moon-waning-crescent' } size={24} color={ isLightModeOn ? colors.star : colors.blue } />
      </View>
    </Pressable>
  )
}

export default ThemeChanger

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 30,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
    },
    themeIconContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})