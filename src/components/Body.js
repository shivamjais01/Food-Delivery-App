import Restcard from "./Restcard";
import resturantlist from "../utils/mockdata";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";

const Body=()=>{
    //local state variable;
    const [res,setres]=useState([]);
    const [search,setsearch]=useState("");
    const[filtered,setfiltered]=useState([]);

    // use the 2nd way load->render->api->render
    useEffect(()=>{
        fetchdata(); 
    },[]);
    const fetchdata=async()=>{
    const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json= await data.json();
    setres(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfiltered(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
// conditional renduring
if(res.length==0){
    return <Shimmer/>;
}
    return(
    <div className="mainbody">
        <div className="searchbar"> 
            <input type="text" className="search" value1={search} onChange={(e)=>{
                setsearch(e.target.value1);
            }}/>
            <button className ="button"onClick={()=>{
                        const res2 = res.filter(
                        (a)=>a.info.name.toLowerCase().includes(search.toLowerCase()));
                        setfiltered(res2);
                        
            }}
            >Search Here</button>
            <button className="filter-rat"
                onClick={()=>{
                    const res1 = res.filter((a)=>a.info.avgRating>4);
                    setfiltered(res1);
            }}
            >
                Filter
            </button>
            
            <div className="resturantlist">
            {
               filtered.map(a=>
                 <Restcard key={a.info.id}resturant={a}/>)
            };
            {/* we cant use index as a key */}
              
            
            </div>
        </div>
        <div className="res container">
            {/* restro cards  */}
        </div>
    </div>
)
};
export default Body;
/*
(Normal JS utility function) 
-usestate()-this use to generate superpowerful state variable
-useEffect()
*/ 