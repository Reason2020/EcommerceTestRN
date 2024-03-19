import { Image, StyleSheet, Text, View, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { colors } from '../constants/colors'
import { router } from 'expo-router'
import renderStarsRating from '../utils/renderStarsRating'
import { isLightModeOn } from '../utils/isLightModeOn'
import { ThemeContext } from '../contexts/ThemeContext'

const ProductCard = ({ item }) => {
    const [ isFavorited, setIsFavorited ] = useState(false)

    const { currentTheme } = useContext(ThemeContext)
    const lightMode = isLightModeOn(currentTheme)

    const { height, width } = Dimensions.get('screen');

  return (
    <Pressable 
        onPress={() => router.navigate(`/products/${item.id}`)}
        style={[styles.container, { width: width*0.5 }]}>
        <Image 
            source={{
                uri: item.image
            }}
            style={[styles.productImage, {
                width: '100%',
                height: 200
            }]}
        />
        <View style={styles.ratingContainer}>
            {renderStarsRating(item.rating.rate).map((star, index) => <View key={index}>{star}</View>)}
        </View>
        <Text numberOfLines={1} style={[styles.productTitle, { color: lightMode ? colors.black : colors.plainWhite }]}>{item.title}</Text>
        <Text style={[styles.productPrice, styles.productText]}>${item.price}</Text>
        <TouchableOpacity 
            onPress={() => setIsFavorited(!isFavorited)} 
            style={styles.favoritesIconContainer}>
            <AntDesign name={ isFavorited ? 'heart' : 'hearto' } size={24} color={colors.red} />
        </TouchableOpacity>
    </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        gap: 5,
        position: 'relative',
        padding: 5
    },
    productImage: {
        objectFit: 'cover',
        borderRadius: 20
    },
    ratingContainer: {
        flexDirection: 'row'
    },
    productText: {
        fontSize: 16,
        fontWeight: '600',
    },
    productPrice: {
        color: colors.blue
    },
    favoritesIconContainer: {
        backgroundColor: colors.plainWhite,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        right: 10,
        top: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    }
})