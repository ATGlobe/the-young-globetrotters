import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Filter, Search, X, ChevronDown, Plus, Minus, Trash2, CreditCard, ShieldCheck, Truck, Sparkles, Star, Heart } from 'lucide-react';
import { MERCH_PRODUCTS, Product } from '../data/merch';
import CategoryTabs from '../components/shop/CategoryTabs';
import ProductCard from '../components/shop/ProductCard';
import ProductModal from '../components/shop/ProductModal';
import ShoppingCart from '../components/shop/ShoppingCart';
import CityPackBanner from '../components/shop/CityPackBanner';
import FilterSidebar from '../components/shop/FilterSidebar';
import ReviewsCarousel from '../components/shop/ReviewsCarousel';
import ShippingInfo from '../components/shop/ShippingInfo';

interface CartItem extends Product {
  quantity: number;
}

export default function MerchShop() {
  // State
  const [activeCategory, setActiveCategory] = React.useState('Tutte');
  const [search, setSearch] = React.useState('');
  const [selectedCharacter, setSelectedCharacter] = React.useState('Tutti');
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 100]);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [favorites, setFavorites] = React.useState<string[]>([]);

  // Filtering Logic
  const filteredProducts = MERCH_PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'Tutte' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                         product.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesCharacter = selectedCharacter === 'Tutti' || product.character === selectedCharacter;
    const matchesPrice = product.price <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesCharacter && matchesPrice;
  });

  // Cart Actions
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const addCityPack = () => {
    // Add multiple items for the pack
    const packItems = MERCH_PRODUCTS.filter(p => p.id === 'tazza-2' || p.id === 'adesivo-2' || p.id === 'gioco-3');
    packItems.forEach(p => addToCart(p));
  };

  return (
    <div className="bg-[#FFF9F0] min-h-screen">
      {/* Navigation / Header Overlay */}
      <div className="fixed top-24 right-8 z-50 flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCartOpen(true)}
          className="bg-white p-5 rounded-full shadow-2xl text-blue-600 relative group border border-blue-50"
        >
          <ShoppingBag className="w-6 h-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white w-6 h-6 rounded-full text-[10px] font-black flex items-center justify-center shadow-lg">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </motion.button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-blue-600 pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-repeat" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center bg-white/20 backdrop-blur-md px-8 py-3 rounded-full text-white font-black text-sm uppercase tracking-widest mb-8 border border-white/20"
          >
            <Sparkles className="w-5 h-5 mr-3 text-yellow-300" />
            The Young Globetrotters Shop
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-tight"
          >
            Porta a casa <br />
            <span className="text-yellow-300">l'avventura</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Scopri la nostra collezione esclusiva di prodotti ufficiali per giovani esploratori. 
            Ogni acquisto supporta le nostre missioni intorno al mondo!
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20 pb-32">
        {/* Category Navigation */}
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black text-slate-900">Filtri</h2>
                  <Filter className="w-5 h-5 text-blue-600" />
                </div>
                
                <FilterSidebar 
                  isOpen={true} 
                  onClose={() => {}} 
                  search={search}
                  onSearchChange={setSearch}
                  selectedCharacter={selectedCharacter}
                  onCharacterChange={setSelectedCharacter}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                />
              </div>

              {/* Promo Card */}
              <div className="mt-8 bg-orange-500 rounded-[40px] p-8 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-2">Spedizione Gratis</h3>
                  <p className="text-orange-100 font-bold text-sm mb-6">Su tutti gli ordini superiori a €50</p>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Truck className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-grow">
            <div className="flex items-center justify-between mb-10">
              <p className="text-slate-500 font-bold">
                Mostrando <span className="text-slate-900">{filteredProducts.length}</span> prodotti
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Ordina per:</span>
                <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 text-sm font-bold text-slate-700">
                  Più Recenti
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onQuickView={setSelectedProduct}
                    onAddToCart={addToCart}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center bg-white rounded-[64px] border border-dashed border-slate-200"
              >
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Nessun prodotto trovato</h3>
                <p className="text-slate-500 text-lg max-w-md mx-auto font-medium">
                  Prova a cambiare i filtri o la categoria per trovare quello che cerchi.
                </p>
                <button 
                  onClick={() => {
                    setSearch('');
                    setSelectedCharacter('Tutti');
                    setActiveCategory('Tutte');
                    setPriceRange([0, 100]);
                  }}
                  className="mt-10 text-blue-600 font-black uppercase tracking-widest text-sm hover:text-blue-700 transition-colors"
                >
                  Resetta tutti i filtri
                </button>
              </motion.div>
            )}
          </main>
        </div>

        {/* City Pack Section */}
        <div className="mt-32">
          <CityPackBanner onAddToCart={addCityPack} />
        </div>

        {/* Info & Reviews Section */}
        <div className="mt-32 space-y-32">
          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Cosa dicono i nostri esploratori</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                Migliaia di famiglie in tutto il mondo hanno già scelto i nostri prodotti ufficiali.
              </p>
            </div>
            <ReviewsCarousel />
          </section>

          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Informazioni Utili</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                Tutto quello che devi sapere sui nostri prodotti e sulle spedizioni.
              </p>
            </div>
            <ShippingInfo />
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-[64px] p-12 lg:p-24 border border-slate-100 shadow-sm">
            <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Domande Frequenti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  q: "Cos'è la stampa su richiesta?",
                  a: "È un metodo di produzione sostenibile dove il prodotto viene creato solo dopo il tuo ordine. Questo riduce gli sprechi e ci permette di offrirti una varietà infinita di design."
                },
                {
                  q: "I materiali sono sicuri per i bambini?",
                  a: "Assolutamente sì. Utilizziamo solo materiali certificati e inchiostri atossici a base d'acqua, sicuri per la pelle e per l'ambiente."
                },
                {
                  q: "Posso tracciare il mio ordine?",
                  a: "Certamente. Appena il tuo ordine viene spedito, riceverai un'email con il link per seguire il viaggio del tuo pacco in tempo reale."
                },
                {
                  q: "Cosa succede se il prodotto arriva danneggiato?",
                  a: "La tua soddisfazione è la nostra priorità. Se un prodotto arriva danneggiato, contattaci subito e provvederemo a inviarti una sostituzione gratuita."
                }
              ].map((faq, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-xl font-black text-slate-900 flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    {faq.q}
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Modals & Overlays */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={addToCart}
      />
      
      <ShoppingCart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}


