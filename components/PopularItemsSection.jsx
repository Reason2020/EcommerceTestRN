import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Link } from 'expo-router'
import { colors } from '../constants/colors'
import ProductCard from './ProductCard'
import { isLightModeOn } from '../utils/isLightModeOn'
import { ThemeContext } from '../contexts/ThemeContext'

const PopularItemsSection = ({ items }) => {
  const { currentTheme } = useContext(ThemeContext)
  const lightMode = isLightModeOn(currentTheme)
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, { color: lightMode ? colors.black : colors.plainWhite }]}>Popular Items</Text>
        <Link style={styles.linkText} href={'/productListings'}>See All</Link>
      </View>
      {/* product card ui */}
      <FlatList 
        showsHorizontalScrollIndicator={false}
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
        fontWeight: 'bold'
    },
    linkText: {
        color: colors.blue
    }
})