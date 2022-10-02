import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function PeopleDetail() {

  let { PeopleId } = useParams();
  const [peopleDetail, setPeopleDetail] = useState([]);

  useEffect(() => {
    async function getDetails(){
        let res = await fetch(`https://akabab.github.io/starwars-api/api/id/${PeopleId}.json`);
        let data = await res.json();
        setPeopleDetail(data);
    }
    getDetails();
  }, [])
  return (
    <>
        {
         <div className="people-detail">
            <div className="back">
                <a href="/">Back</a>
            </div>
            <img src={peopleDetail.image} className="people-detail-image" alt=""/>
            <div>
                <h4>{peopleDetail.name}</h4>
            </div>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Eye Color</th>
                    </tr>
                </thead>
                    <tr>
                        <td>{peopleDetail.class ? peopleDetail.class : "none"}</td>
                        <td>{peopleDetail.eyeColor ?  peopleDetail.eyeColor :"none" }</td>
                    </tr>
                <thead>
                    <tr>
                        <th>Gender</th>
                        <th>Height</th>
                    </tr>
                </thead>
                    <tr>
                        <td>{peopleDetail.gender ? peopleDetail.gender: "none"}</td>
                        <td>{peopleDetail.height? peopleDetail.height: "none"}</td>
                    </tr>
                <thead>
                    <tr>
                        <th>Home World</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                    <tr>
                        <td>{peopleDetail.homeworld ? peopleDetail.homeworld : "none"}</td>
                        <td>{peopleDetail.manufacturer ? peopleDetail.manufacturer: "none"}</td>
                    </tr>
                <thead>
                    <tr>
                        <th>Mass</th>
                        <th>Model</th>
                    </tr>
                </thead>
                    <tr>
                        <td>{peopleDetail.mass ? peopleDetail.mass : "none"}</td>
                        <td>{peopleDetail.model ? peopleDetail.model: "none"}</td>
                    </tr>
                <thead>
                    <tr>
                        <th>Plating Color</th>
                        <th>Product Line</th>
                    </tr>
                </thead>
                    <tr>
                        <td>{peopleDetail.platingColor ? peopleDetail.platingColor: "none"}</td>
                        <td>{peopleDetail.productLine ? peopleDetail.productLine: "none"}</td>
                    </tr>
                <thead>
                    <tr>
                        <th>Sensor Color</th>
                        <th>Skin Color</th>
                    </tr>
                </thead>
                    <tr>
                        <td>{peopleDetail.sensorColor ? peopleDetail.sensorColor: "none"}</td>
                        <td>{peopleDetail.skinColor ? peopleDetail.skinColor: "none"}</td>
                    </tr>
                <thead>
                    <tr>
                        <th>Species</th>
                        <th>Wiki</th>
                    </tr>
                </thead>
                    <tr>
                        <td>{peopleDetail.species ? peopleDetail.species: "none"}</td>
                        <td><a href={peopleDetail.wiki} target="_blank" rel="noreferrer">{peopleDetail.wiki ? peopleDetail.wiki: "none"}</a></td>
                    </tr>
                </table>
         </div>
         
        }
    </>
  )
}

export default PeopleDetail