import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { isLightModeOn } from '../utils/isLightModeOn'
import { colors } from '../constants/colors'
import ProductCard from './ProductCard'

const SearchModal = ({ items, setSearchPerformed }) => {
    const { currentTheme } = useContext(ThemeContext)
    const lightMode = isLightModeOn(currentTheme)

  return (
    <ScrollView style={[styles.modalContainer, { backgroundColor: lightMode ? colors.plainWhite : colors.black }]}>
        <Text style={[styles.modalTitleText, { color: lightMode ? colors.black : colors.plainWhite }]}>Search Results: </Text>
        <View style={styles.searchResultsContainer}>
            {
                items.length > 0 ? (
                    items.map((item) => <ProductCard key={item.id} item={item} />)
                ) : <Text style={[styles.noProductsText, { color: lightMode ? colors.black : colors.plainWhite }]}>No Products</Text>
            }
        </View>
        <Button 
            onPress={() => setSearchPerformed(false)}
            title='Back to Home'
        />
    </ScrollView>
  )
}

export default SearchModal

const styles = StyleSheet.create({
    searchResultsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    modalTitleText: {
        fontSize: 16,
        fontWeight: '500'
    }
})