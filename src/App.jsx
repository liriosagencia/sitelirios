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
  <Route path="/agencia-de-influenciadores" element={<Home />} />
  <Route path="/ganhar-dinheiro-no-kwai" element={<Kwai />} />
  <Route path="/cortes-para-kwai-cut" element={<KwaiSC />} />
  <Route path="/ganhar-dinheiro-kwai-live" element={<KwaiLive />} />
  <Route path="/como-vender-no-tiktok-shop" element={<TikTokShop />} />
  <Route path="/top-10-lirios" element={<HallOfFame />} />
  <Route path="/entrar-na-agencia" element={<Contact />} />
</Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;