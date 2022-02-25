/* eslint-disable react-hooks/exhaustive-deps */
import { Routes , Route, useNavigate } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DownloadPage from './pages/DownloadPage';
import HomePage from './pages/HomePage';
import AfterLoginPage from './pages/AfterLoginPage';
import ProductsPage from './pages/ProductsPage';
import SafetyPage from './pages/SafetyPage';
import SupportPage from './pages/SupportPage';
import EditInfoPage from './pages/EditInfoPage';
import ChatPage from './pages/ChatPage';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

 
  const navigate = useNavigate();
  const logged = useSelector(state => state.usersData.logged)

  
    useEffect(() => {
      logged ? navigate('/main') : navigate('/')
    }, [logged])
   

  return (
   <>
   <Routes>
     <Route path='/' element={<HomePage></HomePage>}></Route>
     <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
     <Route path='/about' element={<AboutPage></AboutPage>}></Route>
     <Route path='/safety' element={<SafetyPage></SafetyPage>}></Route>
     <Route path='/support' element={<SupportPage></SupportPage>}></Route>
     <Route path='/download' element={<DownloadPage></DownloadPage>}></Route>
     <Route path='/main' element={<AfterLoginPage></AfterLoginPage>}></Route>
     <Route path='/editinfo' element={<EditInfoPage></EditInfoPage>}></Route>
     <Route path='/ChatPage' element={<ChatPage></ChatPage>}></Route>
   </Routes>
   </>
  );
}

export default App;
