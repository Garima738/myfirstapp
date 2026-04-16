import { useContext } from "react";
import { ThemeContext, UserContext, LangContext, GlobalContext } from "./assets/context";

const App = () => {


  // const { theme, toggleTheme } = useContext(ThemeContext);
  // const { user, setUser } = useContext(UserContext);
  // const { lang, setLang } = useContext(LangContext);
  
 const {state,dispatch} = useContext(GlobalContext); //pass the one context whose have two value or jo sbse phele likha ho voh.
  const {theme,user,lang} = state;




  // Toggle user
  const toggleUser = () => {
    setUser((prev) =>
      prev.name === "guest" ? { name: "host" } : { name: "guest" }
    );
  };

  // Toggle language
  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <div>
      <p>Theme: {theme}</p>
      <p>User: {user.name}</p>
      <p>Lang: {lang}</p>

      {/* Theme Button */}
      <button onClick={()=>dispatch({type:"TOGGLE_THEME"})}>
        ThemeChange
      </button>

      {/* User Button */}
      <button onClick={()=>dispatch({type:"USE_LANG"})}>
        en
      </button>

      {/* Language Button */}
      <button onClick={()=>dispatch({type:"USE_LANG"})}>
        guest
      </button>
    </div>
  );
};

export default App;

// import { useContext } from "react";
// import { ThemeContext, UserContext, LangContext } from "./assets/context";

// const App = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const { user, setUser } = useContext(UserContext);
//   const { lang, setLang } = useContext(LangContext);

//   const toggleUser = () => {
//     setUser((prev) =>
//       prev.name === "guest" ? { name: "host" } : { name: "guest" }
//     );
//   };

//   const toggleLang = () => {
//     setLang((prev) => (prev === "en" ? "fr" : "en"));
//   };

//   const containerStyle = {
//     backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
//     color: theme === "light" ? "#000000" : "#ffffff",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "Arial",
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     margin: "10px",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px",
//     backgroundColor: theme === "light" ? "#007bff" : "#444",
//     color: "#fff",
//   };

//   return (
//     <div style={containerStyle}>
//       <h2>Context API Demo</h2>

//       <p><b>Theme:</b> {theme}</p>
//       <p><b>User:</b> {user.name}</p>
//       <p><b>Lang:</b> {lang}</p>

//       <button style={buttonStyle} onClick={toggleTheme}>
//         Toggle Theme
//       </button>

//       <button style={buttonStyle} onClick={toggleUser}>
//         Toggle User
//       </button>

//       <button style={buttonStyle} onClick={toggleLang}>
//         Toggle Language
//       </button>
//     </div>
//   );
// };

// export default App;