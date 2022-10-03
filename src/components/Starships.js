import React, { useEffect, useState } from 'react'
import Header from './Header'


function Starships() {
    
    const [ starships, setStarships ] = useState([])

    useEffect(() => {
        async function Starships() {
            let res = await fetch("https://swapi.dev/api/starships");
            let data = await res.json();
            setStarships(data.results);
            console.log(data.results)
        }
        Starships();
    }, [])
  return (
    <>
        <Header />
    <div className="center-table">
        <table id="table">
            <tbody>
                {
                    starships.map(ship => {
                        return(
                            <tr key={ship.name}>
                                <td>{ship.name}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Starships