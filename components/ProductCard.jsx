import { Image, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { colors } from '../constants/colors';
import { router } from 'expo-router'

const ProductCard = ({ item }) => {
    const { height, width } = Dimensions.get('screen');

    const renderStarsRating = (rating) => {
        //calculating number of full, half and empty stars
        const fullStars = Math.floor(rating)
        const halfStar = rating - fullStars
        const remaingStars = Math.floor(5 - rating)
        const stars = []

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesome name='star' color={colors.star} size={24} />)
        }

        if (halfStar > 0) {
            stars.push(<FontAwesome name='star-half-empty' color={colors.star} size={24} />)
        }

        if (remaingStars >= 1) {
            for (let i = 0; i < remaingStars; i++) {
                stars.push(<FontAwesome name='star-o' color={colors.star} size={24} />)
            }
        }

        return stars
    }

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
            {renderStarsRating(item.rating.rate)}
        </View>
        <Text numberOfLines={1} style={[styles.productTitle, styles.productText]}>{item.title}</Text>
        <Text style={[styles.productPrice, styles.productText]}>${item.price}</Text>
        <View style={styles.favoritesIconContainer}>
            <AntDesign name='heart' size={24} color={colors.red} />
        </View>
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
    productTitle: {
        color: colors.black
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