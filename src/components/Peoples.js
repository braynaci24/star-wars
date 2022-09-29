import React, { useEffect } from 'react'

function Peoples( { peoples } ) {

 return (
    <div id='peoples-content'>
        {
            peoples.map(item => {
                return(
                        <div className="card" key={item.id}>
                            <img src={item.image} className="people-image" alt="Avatar" />
                        <div className="container">
                            <h4><b>{item.name}</b></h4> 
                        </div>
                        </div>
                ) 
            })
        }
    </div>
 )
}

export default Peoples