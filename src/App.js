import { useEffect, useState } from 'react'
import Header from './components/Header'
import Peoples from './components/Peoples'
import PeopleDetail from './components/PeopleDetail';
import Films from './components/Films';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

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
    <div className="App">
       <BrowserRouter>
          <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Peoples peoples={peoples}/>
            </>
          }>
          </Route>
          <Route path="People/:PeopleId" element={
            <PeopleDetail/>
          }>
        </Route>
        <Route path="/films" element={
          <Films />
        }>
        </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
