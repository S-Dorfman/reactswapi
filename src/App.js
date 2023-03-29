import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import Starship from './components/Starship';
import Planets from './components/Planets';

//Hold the starship objects in state with the useStatehook, don't forget to initialize to an empty array!
//Use the useEffecthook to make the AJAX request once the app loads.

//.map()over each starship object in state to
// transform them into a <StarshipCard />component

function App() {
  const [starship, setStarship] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(true);
//starship cards
  useEffect(() => {
    async function fetchStarship() {
      const res = await fetch('https://swapi.dev/api/starships/');
      const data = await res.json();
      setStarship(data.results);
      setLoading(false);
    }

  fetchStarship();  
  }, [])
  console.log('data', starship);

  //Planet card
  useEffect(() => {
    async function fetchPlanet() {
      const res = await fetch('https://swapi.dev/api/planets/');
      const data = await res.json();
      setPlanet(data.results);
      setLoading(false);
    }

    fetchPlanet();  
  }, [])
  console.log('data', planet);

  return (
    <>
      <Router>
      <Navbar />
      <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <Routes>
            <Route exact path='/' element={<Home />}/>     
            <Route exact path='/starships' element={<Starship data={starship}/> } />
            <Route exact path = '/planets' element={<Planets data={planet} />} />
          </Routes>
        )}
    
            
            
      </Container>
      </Router>
    </>
  );
}

export default App;
