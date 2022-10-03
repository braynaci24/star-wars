import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Header from './Header'

function PeopleDetail() {

  let { PeopleId } = useParams();
  const [peopleDetail, setPeopleDetail] = useState([]);

  async function getDetails(){
    let res = await fetch(`https://akabab.github.io/starwars-api/api/id/${PeopleId}.json`);
    let data = await res.json();
    setPeopleDetail(data);
  }
  
  useEffect(() => {
    getDetails();
  }, [])

  return (
    <>
        <Header />
        {
        <div className="people-detail">
            <img src={peopleDetail.image} className="people-detail-image" alt=""/>
            <div>
                <h4>{peopleDetail.name}</h4>
            </div>
            <div style={{overflow: "auto", width: "100%"}}>
            <table id="table">
                <tbody className="detail-tbody">
                    <tr>
                        <td>Class</td>
                        <td>{peopleDetail.class ? peopleDetail.class : "none"}</td>
                    </tr>
                    <tr>
                        <td>Eye Color</td>
                        <td>{peopleDetail.eyeColor ?  peopleDetail.eyeColor :"none" }</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{peopleDetail.gender ? peopleDetail.gender: "none"}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{peopleDetail.height? peopleDetail.height: "none"}</td>
                    </tr>
                    <tr>
                        <td>Home World</td>
                        <td>{peopleDetail.homeworld ? peopleDetail.homeworld : "none"}</td>
                    </tr>
                    <tr>
                        <td>Manufacturer</td>
                        <td>{peopleDetail.manufacturer ? peopleDetail.manufacturer: "none"}</td>
                    </tr>
                    <tr>
                        <td>Mass</td>
                        <td>{peopleDetail.mass ? peopleDetail.mass : "none"}</td>
                    </tr>
                    <tr>
                        <td>Model</td>
                        <td>{peopleDetail.model ? peopleDetail.model: "none"}</td>
                    </tr>
                    <tr>
                        <td>Plating Color</td>
                        <td>{peopleDetail.platingColor ? peopleDetail.platingColor: "none"}</td>
                    </tr>
                    <tr>
                        <td>Product Line</td>
                        <td>{peopleDetail.productLine ? peopleDetail.productLine: "none"}</td>
                    </tr>
                    <tr>
                        <td>Sensor Color</td>
                        <td>{peopleDetail.sensorColor ? peopleDetail.sensorColor: "none"}</td>
                    </tr>
                    <tr>
                        <td>Skin Color</td>
                        <td>{peopleDetail.skinColor ? peopleDetail.skinColor: "none"}</td>
                    </tr>
                    <tr>
                        <td>Species</td>
                        <td>{peopleDetail.species ? peopleDetail.species: "none"}</td>
                    </tr>
                    <tr>
                        <td>Wiki</td>
                        <td><a href={peopleDetail.wiki} target="_blank" rel="noreferrer">{peopleDetail.wiki ? peopleDetail.wiki: "none"}</a></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        }
    </>
  )
}

export default PeopleDetail