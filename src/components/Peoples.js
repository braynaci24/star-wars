import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
  
function Peoples() {

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    async function getPeople() {
      let res = await fetch('https://akabab.github.io/starwars-api/api/all.json')
      let data = await res.json();
      setPeoples(data);
    } 
    getPeople();
  }, [])

 return (

    <div id='peoples-content'>
        {
            peoples.map(item => {
                return(
                        <Link to={`people/${item.id}`} className="card" key={item.id}>
                            <img src={item.image} className="people-image" alt="Avatar" />
                            <div className="container">
                                <h4><b>{item.name}</b></h4> 
                            </div>
                        </Link>
                ) 
            })
        }
    </div>
 )
}

export default Peoples