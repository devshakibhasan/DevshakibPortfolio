import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Component }  from 'react';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Feature from './Pages/Feature/Feature';
import MainPage from './Pages/MainPage/MainPage';
import Education from './Pages/Resume/Education/Education';
import Skills from './Pages/Resume/Skills/Skills';
import Resume from './Pages/Resume/Resume';



function App() {
  return (
    <div className='app'>
      <Header></Header>

      <Routes>
        <Route path="/" element={<MainPage />} >
    
        </Route>
   
        
       
{/* 

        <Route path='/addItem' element={
          <RequireAuth>
         <AddItem></AddItem>
          </RequireAuth>
        }>
        </Route>

        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }>
        </Route>

        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }>
        </Route>
        <Route path="/Blogs" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout/:productId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path="/addproduct" element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

        <Route path="/manageproduct" element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }></Route>
        <Route path="/orders" element={
          <RequireAuth>
          <Order></Order>
          </RequireAuth>
        }></Route> */}

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      {/* <Footer></Footer> */}
      <ToastContainer />
    </div>
  );
}

export default App;
