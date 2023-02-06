import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Banner from './Components/compo/Banner';
import ProductDetailPage from './Components/compo/ProductDetailPage';
import Products from './Components/compo/Products';
import Footer from './Components/headFoot/Footer';
import Header from './Components/headFoot/Header';

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<>
            <Banner title="Welcome to Our E-Commerce Website" mainTitle="Find Your Product" />
            <Products title="Products" productCount={8} />
          </>} />

          <Route exact path="/products" element={<>
            <Banner mainTitle="All Products" />
            <Products title="All Products" />
          </>} />

          <Route exact path="/detailPage" element={<>
            <Banner mainTitle="Product Detail" />
            <ProductDetailPage />
          </>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
