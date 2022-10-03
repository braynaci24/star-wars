import Header from './components/Header'
import Peoples from './components/Peoples'
import PeopleDetail from './components/PeopleDetail';
import Films from './components/Films';
import Starships from './components/Starships';
import Planets from './components/Planets';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Peoples />
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
        <Route path="/starships" element={
          <Starships />
        }>
        </Route>
        <Route path="/planets" element={
          <Planets />
        }>
        </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
