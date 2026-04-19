import Navbar from './component/Navbar'
import Herro from './component/Herro'
import Stat from './component/Stat'
import Tools from './component/Tools'
import Steps from './component/Steps'
import Footer from './component/Footer'
import { useState } from "react";

import './App.css'

const getdata = async()=>{
  const res=await fetch("/carddata.json");

  return res.json();

}

const datapromise = getdata();

function App() {
  const[type,settype]= useState("Products");
  console.log(type);
  

  return (
    <>
     
     <Navbar></Navbar>
     {type !="cart" && <Herro></Herro>}
     {type !="cart" && <Stat></Stat>}
      <Tools datapromise={datapromise} type={type} settype={settype}></Tools>
     {type !="cart" && <Steps></Steps>}
      <Footer></Footer>
    </>
  )
}

export default App
