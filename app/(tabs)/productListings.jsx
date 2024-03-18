import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import TopSection from '../../components/TopSection';
import PopularItemsSection from '../../components/PopularItemsSection';
import { useEffect, useState } from 'react';
import { getPopularProducts } from '../../api/products';

export default function App() {
  const [ popularProducts, setPopularProducts ] = useState([])

  useEffect(() => {
    (async () => {
      const popularProducts = await getPopularProducts()
      setPopularProducts(popularProducts)
    })()
  }, [])

  if (!popularProducts) return <ActivityIndicator size='large' /> 
  
  
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopSection />
      <PopularItemsSection items={popularProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20
  },
});
