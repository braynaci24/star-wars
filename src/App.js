import { useEffect, useState } from 'react'
import Header from './components/Header'
import Peoples from './components/Peoples'
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
          <Header />
          <Peoples peoples={peoples}/>
    </div>
  );
}

export default App;
