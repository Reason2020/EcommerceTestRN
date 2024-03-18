import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import TopSection from '../../components/TopSection';
import PopularItemsSection from '../../components/PopularItemsSection';
import { useEffect, useState } from 'react';
import { getAllCategoriesList, getAllProducts, getPopularProducts } from '../../api/products';
import CategoriesList from '../../components/CategoriesList';
import FilteredProductsList from '../../components/FilteredProductsList';

export default function App() {
  const [ popularProducts, setPopularProducts ] = useState([])
  const [ categoriesList, setCategoriesList ] = useState([])
  const [ filteredProducts, setFilteredProducts ] = useState([])

  useEffect(() => {
    (async () => {
      const popularProductsResponse = await getPopularProducts()
      const categoriesListResponse = await getAllCategoriesList()

      setPopularProducts(popularProductsResponse)
      setCategoriesList(categoriesListResponse)
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

  if (!popularProducts || !categoriesList) return <ActivityIndicator size='large' /> 
  
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <TopSection />
      <PopularItemsSection items={popularProducts} />
      <CategoriesList items={categoriesList} />
      <FilteredProductsList items={filteredProducts} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    // marginBottom: 50,
  },
});
