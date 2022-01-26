import './App.css';
import AList from './components/AList';
import AForm from './components/AForm';
import Leftnav from './components/LeftNav';
import Test from "./test"
import TopNav from './components/Topnav';

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useRouteMatch
} from "react-router-dom";
import Page1 from './pages/Page1';
import Profile from './pages/Profile';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <TopNav />
          <div className='maingrid'>
            <Leftnav />
            <div className='subgrid'>
              <Routes>
                <Route path='/page1' element={<Page1/>} />
                <Route path='/profile' element={<Profile/>} />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
    </div>
  );
}
export default App;