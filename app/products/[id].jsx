import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductDetails = () => {
  const { id } = useLocalSearchParams()

  return (
    <View>
      <Text>ProductDetails for product {id}</Text>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})