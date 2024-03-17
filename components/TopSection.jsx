import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const TopSection = () => {
  return (
    <View style={styles.container}>
        <View style={styles.iconizedTextInput}>
            <TextInput 
                style={styles.inputField}
                placeholder='Search'
                placeholderTextColor={colors.darkGray}
            />
            <Feather name="search" size={24} color={colors.black} />
        </View>
        <View style={styles.cartContainer}>
            <Feather name='shopping-bag' size={24} color={colors.black} />
        </View>
    </View>
  )
}

export default TopSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconizedTextInput: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: colors.lightGray
    },
    inputField: {
        flex: 1
    },
    cartContainer: {
        backgroundColor: colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 22
    }
})