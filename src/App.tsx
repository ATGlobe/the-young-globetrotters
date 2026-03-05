import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import BookPage from './pages/BookPage';
import Activities from './pages/Activities';
import ActivityCategory from './pages/ActivityCategory';
import ExplorerPassport from './pages/ExplorerPassport';
import Shop from './pages/Shop';
import ForTeachers from './pages/ForTeachers';
import Contact from './pages/Contact';
import Mappa from './pages/Mappa';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsConditions from './pages/TermsConditions';
import CulinaryTraditions from './pages/CulinaryTraditions';
import AviationThemes from './pages/AviationThemes';
import StructuredLearning from './pages/StructuredLearning';
import GlobalAwareness from './pages/GlobalAwareness';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<Books />} />
          <Route path="books/:city" element={<BookPage />} />
          <Route path="activities" element={<Activities />} />
          <Route path="activities/:category" element={<ActivityCategory />} />
          <Route path="passport" element={<ExplorerPassport />} />
          <Route path="shop" element={<Shop />} />
          <Route path="teachers" element={<ForTeachers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="map" element={<Mappa />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="culinary-traditions" element={<CulinaryTraditions />} />
          <Route path="aviation-themes" element={<AviationThemes />} />
          <Route path="structured-learning" element={<StructuredLearning />} />
          <Route path="global-awareness" element={<GlobalAwareness />} />
        </Route>
      </Routes>
    </Router>
  );
}
