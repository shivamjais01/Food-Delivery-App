import React from "react";
import Reactdom from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Fotter";
import restcard from "./components/Restcard";
const App=()=>(
    <div>
        <Header/>
        <Body/>
        <Footer/> 
    </div>
);

const vari=Reactdom.createRoot(document.getElementById("root"));
vari.render(<App/>)


// there are two type of import export 
//1 default       "export default what we want to export"
//2 name export   "export const file name"


// react is fast due to its dom operation