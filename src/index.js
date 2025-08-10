import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Nav from './components/Nav';
import Pop from './components/Pop';
import SaleImg from './components/SaleImg';
import Topics from './components/Topics';
import Footer from './components/Footer';
import Rec from  './components/Rec';
import Catg from  './components/Catg';




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Nav></Nav>
    <SaleImg></SaleImg>
    <Pop></Pop>
    <Topics></Topics>
    <Rec></Rec>
    <Catg></Catg>
    <Footer></Footer> 
    </div>
);