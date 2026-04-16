//import { createContext, useState } from "react";     //no need with reducer 

import {useContext, useReducer} from 'react';
import { ThemeContext, UserContext, LangContext, GlobalContext } from "./assets/context";

//2. cretae reducer function always use switch inside reducer. handle scatter setter.

function reducer(state,action){
  switch(action.type){
    case "TOGGLE_THEME":
      return{...state,
        theme:state.theme==="light"?"dark":"light",

      }
      case "SET_USER":
        return{
          ...state,
          user:action.payload,
        }
        case "SET_LANG":
          return{
            ...state,
            lang:action.payload //whenever state is dynamic.
          }
          default:
            return state;
  }
}




const Appprovider = ({ children }) => {
   //updated with reducer.
  //1. create common state object

  const initialState={
    theme:"Light",
    user:{name:"Guest"},
    lang:"en"
  }




  // const [theme, setTheme] = useState("light");
  // const [user, setUser] = useState({ name: "guest" });
  // const [lang, setLang] = useState("en");

    const [ state,dispatch]  = useReducer(reducer,initialState)

  //3. create single state object;

 


  // const toggleTheme = () => {
  //   setTheme((prev) => (prev === "light" ? "dark" : "light"));
  // };



 //instead of theme,toogletheme pass state,dispatch
 //instead of passing seperate state and its handler pr detter we are passing common state  object
  return (
    // <ThemeContext.Provider value={{ state,dispatch }}> 
   
    //   <UserContext.Provider value={{ state,dispatch }}>
    //     <LangContext.Provider value={{state,dispatch }}>
    //       {children}
    //     </LangContext.Provider>
    //   </UserContext.Provider>
    // </ThemeContext.Provider>



    <GlobalContext.Provider value = {{state,dispatch}}>{children}</GlobalContext.Provider>
  );
};

export default Appprovider;


//context-api-with-used-reducer.



// React (Your Code)------ Redux Toolkit Equivalent
// useReducer	------- createSlice
// dispatch	-------  dispatch (same)
// reducer function---------- 	reducers inside slice
// Context Provider --------------	Provider (from react-redux)
// Global Context ----------	Redux Store