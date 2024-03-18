import { ActivityIndicator, Platform, ScrollView, StyleSheet, StatusBar, View } from 'react-native';
import TopSection from '../../components/TopSection';
import PopularItemsSection from '../../components/PopularItemsSection';
import { useEffect, useState } from 'react';
import { getAllCategoriesList, getAllProducts, getPopularProducts } from '../../api/products';
import CategoriesList from '../../components/CategoriesList';
import FilteredProductsList from '../../components/FilteredProductsList';
import { colors } from '../../constants/colors';

export default function App() {
  const [ popularProducts, setPopularProducts ] = useState([])
  const [ categoriesList, setCategoriesList ] = useState([])
  const [ filteredProducts, setFilteredProducts ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const popularProductsResponse = await getPopularProducts()
      const categoriesListResponse = await getAllCategoriesList()

      setPopularProducts(popularProductsResponse)
      setCategoriesList(categoriesListResponse)

      setIsLoading(false)
    })()
  }, [])

  //separate sideeffect for filteredProducts
  //TODO: refetch data according to selected category
  useEffect(() => {
    (async () => {
      const filteredProductsResponse = await getAllProducts()
      setFilteredProducts(filteredProductsResponse)
    })()
  }, [])

  if (isLoading) return (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size='large' color={colors.black} />
    </View>
  ) 
  
  return (
    <ScrollView style={styles.container}>
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
    // marginBottom: 50,
  },
});
