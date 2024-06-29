import { main_logo } from "../utils/const";
import { useState } from "react";
const Header=()=>{
    const [loginit,setlogint]=useState("login");
    return(
    <div className=" header">
        <img className="logo" src={main_logo}/>
        <div className="navitems">
            <ul className="id" >
                
                <li className="l1">Home</li>
                <li className="l2">Cart</li>
                <li className="l3">About Us</li>
                <li className="l4">Contact Us</li>
                <button className="login"
                    onClick={()=>{
                        if(loginit=="login"){
                            const h="logout";
                        setlogint(h);
                        }
                        else{
                            const h="login";
                        setlogint(h);
                        }
                        
                    }     
                    }
                >{loginit}</button>
            </ul>
            
        </div>
        
    </div>
    )
};
export default Header;