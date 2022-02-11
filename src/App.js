import './App.css';
import { BrowserRouter , Link } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <nav>
        <Link to='/'>Tinder</Link>
        {/* probably will be ul with few li(s) */}
        <Link to='/feature/swipe'>Products</Link>
        <Link to='/about-tinder'>Learn</Link>
        <Link to='/safety'>Safety</Link>
        <Link to='/support'>Support</Link>
        <Link to='/download'>Download</Link>

        <button>ENGLISH</button>
        <button>Log in</button>
     </nav>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
