import { ActivityIndicator, Platform, ScrollView, StyleSheet, StatusBar, View } from 'react-native';
import TopSection from '../../components/TopSection';
import PopularItemsSection from '../../components/PopularItemsSection';
import { useContext, useEffect, useState } from 'react';
import { getAllCategoriesList, getAllProducts, getFilteredProducts, getPopularProducts } from '../../api/products';
import CategoriesList from '../../components/CategoriesList';
import FilteredProductsList from '../../components/FilteredProductsList';
import { colors } from '../../constants/colors';
import { isLightModeOn } from '../../utils/isLightModeOn';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SelectedCategoryContext } from '../../contexts/selectedCategoryContext';

export default function App() {
  const [ popularProducts, setPopularProducts ] = useState([])
  const [ categoriesList, setCategoriesList ] = useState([])
  const [ filteredProducts, setFilteredProducts ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ errorText, setErrorText ] = useState('')

  const { selectedCategory } = useContext(SelectedCategoryContext)

  const { currentTheme } = useContext(ThemeContext)
  const lightMode = isLightModeOn(currentTheme)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const popularProductsResponse = await getPopularProducts()
      const categoriesListResponse = await getAllCategoriesList()

      if (!popularProductsResponse || !categoriesListResponse) {
        setErrorText('Failed to fetch products')
        return
      }

      setPopularProducts(popularProductsResponse)
      setCategoriesList(categoriesListResponse)

      setIsLoading(false)
    })()
  }, [])

  //separate sideeffect for filteredProducts
  //TODO: refetch data according to selected category
  useEffect(() => {
    (async () => {
      const filteredProductsResponse = await getFilteredProducts(selectedCategory)
      
      if (!filteredProductsResponse) {
        setErrorText('Failed to fetch products')
        return
      }

      setFilteredProducts(filteredProductsResponse)
    })()
  }, [selectedCategory])

  if (isLoading) return (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size='large' color={colors.black} />
    </View>
  ) 

  if (errorText) return (
    <Text style={styles.errorText} >{errorText}</Text>
  )
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: lightMode ? colors.plainWhite : colors.black }]}>
      <StatusBar backgroundColor={colors.black} barStyle='light-content' />
      <TopSection />
      <PopularItemsSection items={popularProducts} />
      <CategoriesList items={categoriesList} />
      <FilteredProductsList items={filteredProducts} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: Platform.OS === 'android' ? 20 : 0,
  },
  errorText: {
    color: colors.red,
    fontSize: 20,
    fontWeight: '700'
  }
});
