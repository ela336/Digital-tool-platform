import Navbar from './component/Navbar'
import Herro from './component/Herro'
import Stat from './component/Stat'
import Tools from './component/Tools'
import Steps from './component/Steps'
import Footer from './component/Footer'

import './App.css'

const getdata = async()=>{
  const res=await fetch("/carddata.json");

  return res.json();

}

const datapromise = getdata();

function App() {
  

  return (
    <>
     
     <Navbar></Navbar>
     <Herro></Herro>
      <Stat></Stat>
      <Tools datapromise={datapromise}></Tools>
      <Steps></Steps>
      <Footer></Footer>
    </>
  )
}

export default App
