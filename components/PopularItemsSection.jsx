import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { colors } from '../constants/colors'
import ProductCard from './ProductCard'

const DUMMYDATA = [
    1,
    2,
    3,
    4,
    5
]

const PopularItemsSection = ({ items }) => {
    console.log('Items: ',items)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Popular Items</Text>
        <Link style={styles.linkText} href={'/productListings'}>See All</Link>
      </View>
      {/* product card ui */}
      <FlatList 
        horizontal
        data={items}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default PopularItemsSection

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black
    },
    linkText: {
        color: colors.blue
    }
})