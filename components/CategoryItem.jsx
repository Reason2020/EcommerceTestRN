import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../constants/colors'
import { isLightModeOn } from '../utils/isLightModeOn'
import { ThemeContext } from '../contexts/ThemeContext'
import { SelectedCategoryContext } from '../contexts/selectedCategoryContext'

const CategoryItem = ({ item }) => {
    const { currentTheme } = useContext(ThemeContext)
    const lightMode = isLightModeOn(currentTheme)

    const { setSelectedCategory, selectedCategory } = useContext(SelectedCategoryContext)

    const formatCategoryText = (categoryText) => {
        //split category text with multiple words into separate words array
        //capitalize first letter
        //return updated category text
        const wordsInCategory = categoryText.split(' ')
        const updatedWordsInCategory = []
        wordsInCategory.forEach((item) => {
            const updatedWord = item[0].toUpperCase() + item.slice(1, item.length)
            updatedWordsInCategory.push(updatedWord)
        })
        const updatedCategoryText = updatedWordsInCategory.join(' ')
        return updatedCategoryText
    }

  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => {
            setSelectedCategory(item)
        }}>
      <Text style={[styles.categoryText, { color: selectedCategory === item ? colors.red : (lightMode ? colors.black : colors.plainWhite) }]}>{formatCategoryText(item)}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4
    },
    categoryText: {
        color: colors.black,
        fontWeight: '500',
    }
})