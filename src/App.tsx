import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Shop from './pages/Shop';
import VolumeDetail from './pages/VolumeDetail';
import UserArea from './pages/UserArea';
import Mappa from './pages/Mappa';
import About from './pages/About';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Learning from './pages/Learning';
import Admin from './pages/Admin';
import KidsActivities from './pages/KidsActivities';
import MerchShop from './pages/MerchShop';
import VolumeLanding from './pages/VolumeLanding';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="characters" element={<Characters />} />
          <Route path="ebooks" element={<Shop />} />
          <Route path="shop" element={<MerchShop />} />
          <Route path="activities" element={<KidsActivities />} />
          <Route path="volume/:id" element={<VolumeDetail />} />
          <Route path="landing/volume-1" element={<VolumeLanding />} />
          <Route path="account" element={<UserArea />} />
          <Route path="map" element={<Mappa />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="learning" element={<Learning />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}
