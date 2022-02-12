import { BrowserRouter, Link, Routes , Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DownloadPage from './pages/DownloadPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SafetyPage from './pages/SafetyPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<HomePage></HomePage>}></Route>
     <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
     <Route path='/about' element={<AboutPage></AboutPage>}></Route>
     <Route path='/safety' element={<SafetyPage></SafetyPage>}></Route>
     <Route path='/support' element={<SupportPage></SupportPage>}></Route>
     <Route path='/download' element={<DownloadPage></DownloadPage>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
