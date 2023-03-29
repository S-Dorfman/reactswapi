import { Card, Grid } from 'semantic-ui-react';


function Planets ({data}) {
  return (
    <>
    <h1>Planets</h1>
    {data.map((planets, i) => {
        // console.log(planets);
        return(
            <Grid.Column key={i}>
            <Card>
                <Card.Content>
                    <Card.Header>{planets.name}</Card.Header>
                    <Card.Description>
                    <p>Climate: {planets.climate}</p>    
                    <p>Terrain: {planets.terrain}</p>    
                    <p>Population: {planets.population}</p>    
                    </Card.Description>   
                </Card.Content>
            </Card>
            </Grid.Column>
        )
    })}
    </>
  )
}

export default Planets;