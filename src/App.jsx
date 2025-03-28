import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchCategories from './components/SearchCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import BecomeVendor from './components/BecomeVendor';
import ProductsList from './components/ProductsList';

function App() {
  const [data,setData]=useState([])
  const fetchesData = async () => {
    try {
      const url = 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const datas = await response.json();
      setData(datas)
      datas.forEach((item) => {
        console.log(item.category);
      });

      console.log(datas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchesData();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchCategories />
      <FeaturedProducts data={data}/>
      <Footer/>
      <BecomeVendor/>
      <ProductsList data={data}/>
    </>
  );
}

export default App;
