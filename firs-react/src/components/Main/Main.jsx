import React from "react";
import "./Main.scss";
import {data} from "../../assests/data"
import Card from './Card';

const Main = () => {
   
  return (
  <div className="card-container">
    {data.map((item)=><Card {...item}/>)}
  </div>
)};

export default Main;


// return (
//     <div className="cards">
//         <h1>{item.title}</h1>
//         <p>{item.desc}</p>
//         <img src={item.image}/>
//     </div>
// )