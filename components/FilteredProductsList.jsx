import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'

const FilteredProductsList = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        data={items}
        renderItem={({ item }) => <ProductCard item={item}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default FilteredProductsList

const styles = StyleSheet.create({
  container: {
    paddingBottom: 70
  }
})