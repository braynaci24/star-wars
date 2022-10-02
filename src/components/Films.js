import React, { useEffect, useState } from 'react'
import Header from './Header'

function Films() {

    const [films, setFilms] = useState([]);


    useEffect(() => {
        async function films() {
            let res = await fetch("https://swapi.dev/api/films");
            let data = await res.json();
            setFilms(data.results);
            console.log(data.results)
        }
        films();
    }, [])

  return (
    <>
        <Header />
        <div style={{padding: "100px 150px"}}>
        {
            films.map(films => {
                return(
                    <div key={films.episode_id}>
                        {films.title}
                    </div>
                )
            })
        }
        </div>

    </>
  )
}

export default Films