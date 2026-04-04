import { Analytics } from '@vercel/analytics/react';
import Header from './sections/Header';
import SpecialAndIfood from './sections/SpecialAndIfood';
import Location from './sections/Location';
import Footer from './sections/Footer';

import AnimatedCakes from './sections/AnimatedCakes';
import { CartProvider } from "./components/CartContext";
import ProductsSection from './sections/ProductsSection';
import InstagramGallery from './sections/InstagramGallery'


function App() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
              <CartProvider>
              <Header />
                  <AnimatedCakes />
                  <ProductsSection />
                  <SpecialAndIfood />
                  <InstagramGallery />
                  <Location />
                  <Footer />
              </CartProvider>
      </main>
      <Analytics />
    </>
  );
}

export default App;
