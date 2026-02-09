// import './App.css'//to include the path of file like ./ for folder / file name 
// import Header from'./components/Header.jsx'
// import Registration from './components/Registration.jsx'
// import Footer from './components/Footer.jsx'
// function App() {
//   const y=[2024,2025,2026]
//   const c={name:"KIET",location:"Ghaziabad",estdyear:1998};
//   return (
//     <div className="app-container">
//       <Header title="My first react app"/>

//       <main className="main-section">
//         <Registration/>
//       </main>
// <card>
//   <h1>This is child</h1>
//   <h2>THis Demo</h2>
// </card>
// <Footer year={y} company={c}/>
// </div>
//   )
// }

//  export default App


import Wrapper from "./components/Wrapper";

import UserCard from "./components/UserCard";

 
export default function App(){
  const users = [
    {
      name: "Virat Kohli",
      role: "BatsMan",
      country: "India"
    },
    {
      name: "Ms.Dhoni",
      role: "Wk-Batsman",
      country: "India"
    }
  ];
  return <div>
    <h1> User DashBoard</h1>
    <Wrapper title = "User list">

  {users.map((data, index) => (
    <UserCard key={index} data={data} />
))}


    </Wrapper>
    {/* <wrapper title = "Product list">

    </wrapper> */}

  </div>;
}