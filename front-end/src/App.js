import './App.css';
import Nav from './componants/nav'
import Fotter from './componants/Fotter';
import SignUp from './componants/SignUp';
import Loging from './componants/Login';
import AddProduct from './componants/AddProdect';
import UpdateProduct from './componants/UpdateProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivetComponent from './componants/privetComponent';
import ProductList from './componants/ProductList';



function App() {
  return (
    <div className="App">
      {<BrowserRouter>
        <Nav />
        <Routes>


          <Route element={<PrivetComponent />}>

            <Route path='/' element={<ProductList/>} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/logout' element={<h1>logout componant</h1>} />
            <Route path='/profile' element={"profile"} />
          </Route>

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Loging />} />
        </Routes>
        <Fotter />
      </BrowserRouter>}
    </div>
  );
}

export default App;
