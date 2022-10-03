import React, { useEffect, useState } from 'react'
import Header from './Header'

function Films() {

    const [movies, setFilms] = useState([]);

    async function films() {
        let res = await fetch("https://swapi.dev/api/films");
        let data = await res.json();
        setFilms(data.results);
    }

    useEffect(() => {
        films();
    }, [])

  return (
    <>
        <Header />
        <div className="center-table">
            <table id="table">
                <tbody>
                {
                    movies.map(films => {
                        return(
                            <tr key={films.episode_id}>
                                <td>{films.title}</td>
                                <td>{films.release_date}</td>
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

export default Films