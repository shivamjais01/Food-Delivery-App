import { cdn_url } from "../utils/const";
import { useState } from "react/cjs/react.production.min";

const Restcard=(r)=>{
    const {resturant}=r;
    const{
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo}=resturant?.info;


    return(
    <div className ="li1">
        <img className= "img" src={cdn_url+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>Rating : {avgRating}</h3>
        <h3>Delivery Time{deliveryTime}</h3>
        <h3>Cost For Two {costForTwo}</h3>
    </div>
    )
    
};
export default Restcard;