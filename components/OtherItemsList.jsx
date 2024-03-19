import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'

const OtherItemsList = ({ items }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Other Items You Might Like</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => <ProductCard key={item.id} item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default OtherItemsList

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})