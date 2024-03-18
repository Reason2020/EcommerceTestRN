import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'

const FilteredProductsList = ({ items }) => {
  return (
    <FlatList 
        horizontal
        data={items}
        renderItem={({ item }) => <ProductCard item={item}/>}
        keyExtractor={item => item.id}
    />
  )
}

export default FilteredProductsList

const styles = StyleSheet.create({})