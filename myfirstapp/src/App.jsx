
import './App.css' 
//path likhna pdta h if folder m h toh ./folder name/file name

import Header from'./components/Header.jsx'

import Footer from'./components/Footer.jsx'
import Registration from'./components/Registration.jsx'



function App() {
const y = [2024,2025,2026];

const c = {name:"KIET",location:"ghaziabad",esdyear:1998}

  return (
   <div>
    <Header title="My First React App"/> 
    <Header title = "Lets Explore FSD Together"/>  

    <Registration/>
    <Footer year= {y} name={c}/>





</div>

  )
}

 export default App
