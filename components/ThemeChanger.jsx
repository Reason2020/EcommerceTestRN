import { Pressable, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../constants/colors'
import { ThemeContext } from '../contexts/ThemeContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { isLightModeOn } from '../utils/isLightModeOn';

const ThemeChanger = () => {
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

    const lightMode = isLightModeOn(currentTheme)

  return (
    <Pressable
        onPress={() => setCurrentTheme(lightMode ? 'dark' : 'light')}  
        style={[
            styles.container, 
            { 
                backgroundColor: lightMode ? colors.black : colors.plainWhite,
                justifyContent: lightMode ? 'flex-start' : 'flex-end' 
            }
        ]}>
      <View
        style={[styles.themeIconContainer, { backgroundColor: lightMode ? colors.plainWhite : colors.black }]}>
        <MaterialCommunityIcons name={ lightMode ? 'white-balance-sunny' : 'moon-waning-crescent' } size={24} color={ lightMode ? colors.star : colors.blue } />
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