import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather, AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router'
import { colors } from '../constants/colors';

const ProductDetailsImageSection = ({ viewedProduct }) => {
    const [ isFavorited, setIsFavorited ] = useState(false)
    const { height } = Dimensions.get('screen')

  return (
    <View style={styles.productImageContainer}>
        <Image 
            source={{
                uri: viewedProduct.image
            }}
            style={[styles.productImage, { width: '100%', height: height * 0.5 }]}
        />
        <TouchableOpacity 
            onPress={() => router.back()}
            style={[styles.backArrowContainer, styles.iconsContainer]}>
            <Feather name='arrow-left' size={24} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={() => setIsFavorited(!isFavorited)}
            style={[styles.favoriteIconContainer, styles.iconsContainer]}>
            <AntDesign name={ isFavorited ? 'heart' : 'hearto' } size={24} color={colors.red} />
        </TouchableOpacity>
    </View>
  )
}

export default ProductDetailsImageSection

const styles = StyleSheet.create({
    productImageContainer: {
        position: 'relative'
      },
      productImage: {
        objectFit: 'cover'
      },
      iconsContainer: {
        backgroundColor: colors.plainWhite,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        top: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      backArrowContainer: {
        left: 10
      },
      favoriteIconContainer: {
        right: 10
      },
})