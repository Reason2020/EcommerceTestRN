import { ScrollView, StyleSheet, Text, View, Dimensions, StatusBar, Pressable, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getProductById } from '../../api/products'
import { ThemeContext } from '../../contexts/ThemeContext'
import { colors } from '../../constants/colors';
import renderStarsRating from '../../utils/renderStarsRating';
import ProductDetailsImageSection from '../../components/ProductDetailsImageSection';
import { isLightModeOn } from '../../utils/isLightModeOn'
import { CartContext } from '../../contexts/CartContext'

const ProductDetails = () => {
  const [ viewedProduct, setViewedProduct ] = useState({})
  const { id } = useLocalSearchParams()
  const { height, width } = Dimensions.get('screen')

  const { currentTheme } = useContext(ThemeContext)
  const lightMode = isLightModeOn(currentTheme)

  const { cartItems, setCartItems } = useContext(CartContext)

  useEffect(() => {
    (async () => {
      const viewedProductResponse = await getProductById(id)
      console.log('Viewed Product: ', viewedProductResponse)
      setViewedProduct(viewedProductResponse)
    })()
  }, [])

  //add to cart logic
  const addToCart = () => {
    const newCartItems = [ ...cartItems, viewedProduct ]
    setCartItems(newCartItems)
  }

  return (
    <View style={[styles.container, { backgroundColor: lightMode ? colors.plainWhite : colors.black }]}>
      <ScrollView>
      <StatusBar backgroundColor={lightMode ? colors.plainWhite : colors.black} barStyle={lightMode ? 'dark-content' : 'light-content'} />
        <ProductDetailsImageSection viewedProduct={viewedProduct} />
        <View style={styles.titleContainer}>
            <Text style={[styles.titleText, { color: lightMode ? colors.black : colors.plainWhite }]}>{viewedProduct?.title}</Text>
            <View style={styles.priceAndRatingContainer}>
              <Text style={styles.priceText}>${viewedProduct?.price}</Text>
              <View style={styles.ratingContainer}>
                {renderStarsRating(viewedProduct?.rating?.rate).map((star, index) => <View key={index}>{star}</View>)}
              </View>
            </View>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.descriptionTitle, { color: lightMode ? colors.black : colors.plainWhite }]}>Description</Text>
            <Text style={[styles.descriptionText, { color: lightMode ? colors.black : colors.plainWhite }]}>{viewedProduct?.description}</Text>
        </View>
      </ScrollView>
      <Pressable
        onPress={addToCart} 
        style={[styles.button, { width: width * 0.9, backgroundColor: lightMode ? colors.black : colors.plainWhite }]}>
        <Text style={[styles.buttonText, { color: lightMode ? colors.plainWhite : colors.black }]}>Add To Cart</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    flex: 1
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginVertical: 5
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700'
  },
  priceAndRatingContainer: {
    alignItems: 'flex-end'
  },
  priceText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.blue
  },
  ratingContainer: {
    flexDirection: 'row'
  },
  descriptionContainer: {
    marginVertical: 5
  },
  descriptionTitle: {
    fontSize: 19,
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    marginBottom: 10
  }
})