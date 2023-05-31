import { Card, Grid } from 'semantic-ui-react';

function People ({data}) {
    return(
        <>
        <h1>People</h1>
        <Grid columns={3}>
        {data.map((people, i) => {
            // console.log(starships);
            return(
                <Grid.Column key={i}>
                <Card>
                    <Card.Content>
                        <Card.Header>{people.name}</Card.Header>
                        <Card.Description>
                        <p>Height: {people.height}</p>    
                        <p>Eye Color: {people.eye_color}</p>    
                        <p>Birth Year: {people.birth_year}</p>    
                        </Card.Description>   
                    </Card.Content>
                </Card>
                </Grid.Column>
            )
        })}
        </Grid>
        </>
    )
}

export default People; 