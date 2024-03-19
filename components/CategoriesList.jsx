import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

const CategoriesList = ({ items }) => {
  return (
    <View style={styles.container}>
        <CategoryItem item={'All'} />
        <FlatList 
            showsHorizontalScrollIndicator={false}
            data={items}
            renderItem={({ item, index }) => <CategoryItem key={index} item={item} />}
            horizontal
        />
    </View>
  )
}

export default CategoriesList

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row'
    }
})