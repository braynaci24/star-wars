import React, { useEffect, useState } from 'react'
import Header from './Header'

function Planets() {
    
    const [ planets, setPlanets ] = useState([])

    useEffect(() => {
        async function Planets() {
            let res = await fetch("https://swapi.dev/api/planets");
            let data = await res.json();
            setPlanets(data.results);
            console.log(data.results)
        }
        Planets();
    }, [])
  return (
    <>
        <Header />
    <div className="center-table" style={{padding: "100px 150px"}}>
        <table id="table">
            <tbody>
                {
                    planets.map(planets => {
                        return(
                            <tr key={planets.name}>
                                <td>{planets.name}</td>
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
export default Planets