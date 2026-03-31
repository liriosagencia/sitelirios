import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import Home from './pages/Home';
import Kwai from './pages/Kwai';
import KwaiSC from './pages/KwaiSC';
import KwaiLive from './pages/KwaiLive';
import TikTokShop from './pages/TikTokShop';
import HallOfFame from './pages/HallOfFame';
import Contact from './pages/Contact';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      {/* ✅ REMOVA bg-gray-950 daqui */}
      <ScrollToTop />
      <div className="min-h-screen text-white">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kwai" element={<Kwai />} />
            <Route path="/kwai-cortes" element={<KwaiSC />} />
            <Route path="/kwai-live" element={<KwaiLive />} />
            <Route path="/tiktok-shop" element={<TikTokShop />} />
            <Route path="/hall-da-fama" element={<HallOfFame />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;