import { Pressable, StyleSheet, Text, TextInput, View, Alert, ToastAndroid, Modal, ScrollView, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { CartContext } from '../contexts/CartContext';
import ProductCard from './ProductCard';
import { ThemeContext } from '../contexts/ThemeContext';
import { isLightModeOn } from '../utils/isLightModeOn';
import SearchModal from './SearchModal';

const TopSection = ({ items }) => {
    const [ searchText, setSearchText ] = useState('')
    const [ searchPerformed, setSearchPerformed ] = useState(false)
    const [ searchResults, setSearchResults ] = useState([])

    const { cartItems } = useContext(CartContext)

    console.log(cartItems)

    const searchProductByText = (text) => {
        //filter items by search text and return
        setSearchPerformed(true)
        setSearchText('')
        const searchResults = items.filter((item) => item?.title?.toLowerCase().includes(text.toLowerCase()))
        console.log('Search Results: ', searchResults)
        setSearchResults(searchResults)
    }

  return (
    <View style={styles.container}>
        <View style={styles.iconizedTextInput}>
            <TextInput 
                style={styles.inputField}
                placeholder='Search'
                placeholderTextColor={colors.darkGray}
                value={searchText}
                onChangeText={(newSearchText) => setSearchText(newSearchText)}
            />
            <Pressable
                onPress={() => searchProductByText(searchText)}>
                <Feather name="search" size={24} color={colors.black} />
            </Pressable>
        </View>
        <Pressable 
            onPress={() => ToastAndroid.showWithGravity('Cart Section is under maintenance', ToastAndroid.SHORT, ToastAndroid.BOTTOM)}
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
        <Modal
            animationType='slide'
            transparent={false}
            visible={searchPerformed}
        >
            <SearchModal items={searchResults} searchText={searchText} setSearchPerformed={setSearchPerformed} />
        </Modal>
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