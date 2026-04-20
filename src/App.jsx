import Navbar from './component/Navbar'
import Herro from './component/Herro'
import Stat from './component/Stat'
import Tools from './component/Tools'
import Steps from './component/Steps'
import Footer from './component/Footer'
import { useState } from "react";
import { ToastContainer } from "react-toastify";


import './App.css'

const getdata = async()=>{
  const res=await fetch("/carddata.json");

  return res.json();

}

const datapromise = getdata();

function App() {
  const[type,settype]= useState("Products");
   const[selectedtools,setselectedtools]=useState([]);
  console.log(type);
  

  return (
    <>
     
     <Navbar selectedtools={selectedtools} setselectedtools={setselectedtools}></Navbar>
     {type !="cart" && <Herro></Herro>}
     {type !="cart" && <Stat></Stat>}
      <Tools datapromise={datapromise} type={type} settype={settype} selectedtools={selectedtools} setselectedtools={setselectedtools}></Tools>
     {type !="cart" && <Steps></Steps>}
      <Footer></Footer>


      <ToastContainer />
    </>
  )
}

export default App
