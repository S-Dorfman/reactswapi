import { Card, Grid } from 'semantic-ui-react';

function Starship ({data}) {
    return(
        <>
        <h1>Starships</h1>
        {data.map((starships, i) => {
            // console.log(starships);
            return(
                <Grid.Column key={i}>
                <Card>
                    <Card.Content>
                        <Card.Header>{starships.name}</Card.Header>
                        <Card.Description>
                        <p>Model: {starships.model}</p>    
                        <p>Manufacturer: {starships.manufacturer}</p>    
                        <p>Passengers: {starships.passengers}</p>    
                        </Card.Description>   
                    </Card.Content>
                </Card>
                </Grid.Column>
            )
        })}
        </>
    )
}

export default Starship; 