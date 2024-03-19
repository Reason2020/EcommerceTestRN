import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { CartContext } from '../contexts/CartContext';

const TopSection = ({ setModalVisible }) => {
    const { cartItems } = useContext(CartContext)

    console.log(cartItems)

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
        <Pressable 
            onPress={() => setModalVisible(true)}
            style={styles.cartContainer}>
            <Feather name='shopping-bag' size={24} color={colors.black} />
            {
                cartItems.length > 0 ? (
                    <View style={styles.cartItemCountContainer}>
                        <Text style={styles.cartItemCount}>{cartItems.length}</Text>
                    </View>
                ) : null
            }
        </Pressable>
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
    },
    cartItemCountContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: colors.red,
        height: 20,
        width: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartItemCount: {
        fontSize: 13,
        fontWeight: '400',
        color: colors.plainWhite
    }
})