import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import BookPage from './pages/BookPage';
import Activities from './pages/Activities';
import ExplorerPassport from './pages/ExplorerPassport';
import Shop from './pages/Shop';
import ForTeachers from './pages/ForTeachers';
import Contact from './pages/Contact';
import Mappa from './pages/Mappa';
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
          <Route path="passport" element={<ExplorerPassport />} />
          <Route path="shop" element={<Shop />} />
          <Route path="teachers" element={<ForTeachers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="map" element={<Mappa />} />
          <Route path="culinary-traditions" element={<CulinaryTraditions />} />
          <Route path="aviation-themes" element={<AviationThemes />} />
          <Route path="structured-learning" element={<StructuredLearning />} />
          <Route path="global-awareness" element={<GlobalAwareness />} />
        </Route>
      </Routes>
    </Router>
  );
}
