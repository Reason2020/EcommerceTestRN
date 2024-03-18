import { ScrollView, StyleSheet, Text, View, Dimensions, StatusBar, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getProductById } from '../../api/products'

import { colors } from '../../constants/colors';
import renderStarsRating from '../../utils/renderStarsRating';
import ProductDetailsImageSection from '../../components/ProductDetailsImageSection';

const ProductDetails = () => {
  const [ viewedProduct, setViewedProduct ] = useState({})
  const { id } = useLocalSearchParams()
  const { height, width } = Dimensions.get('screen')

  useEffect(() => {
    (async () => {
      const viewedProductResponse = await getProductById(id)
      console.log('Viewed Product: ', viewedProductResponse)
      setViewedProduct(viewedProductResponse)
    })()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar />
        <ProductDetailsImageSection viewedProduct={viewedProduct} />
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{viewedProduct?.title}</Text>
            <View style={styles.priceAndRatingContainer}>
              <Text style={styles.priceText}>${viewedProduct?.price}</Text>
              <View style={styles.ratingContainer}>
                {renderStarsRating(viewedProduct?.rating?.rate)}
              </View>
            </View>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{viewedProduct?.description}</Text>
        </View>
      </ScrollView>
      <Pressable
        onPress={() => console.log('Add to cart logic')} 
        style={[styles.button, { width: width * 0.9 }]}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
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
    fontWeight: '700',
    color: colors.black
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
    color: colors.black,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.black
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    padding: 10,
    borderRadius: 25,
    marginBottom: 10
  },
  buttonText: {
    color: colors.plainWhite
  }
})