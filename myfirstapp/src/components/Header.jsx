// import "./Header.css"
// // export default function Header({title,color,year})
// export default function Header() {
//   return (
//     <header className="header">
//       <div className="header-inner">
//         <h1 className="logo">React App</h1>

//         {/* /* <h1>{Props.title}</h1> */ }


//         <nav className="nav">
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//         </nav>
//       </div>
//     </header>
//   )
// }

import "./Header.css"


// export default function Header({title,color,year,...rest}){
// return (
//   <header>

//     <h1>{title}</h1>
//     <h1>{color}</h1>
//     <h1>{year}
//     </h1>
//     </header>
// )
// }

export default function Header({card}){
return (
  <header>

    <h1>{card}
    
    
    </h1>
    </header>
)
}