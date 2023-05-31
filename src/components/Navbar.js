
import{ Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <Menu inverted>
        <Container>
            <Link to='/'>
                <Menu.Item name="star wars API"/>
            </Link>
            <Link to='/starships'>
                <Menu.Item name="starships"/>
            </Link>
            <Link to='/planets'>
                <Menu.Item name="planets"/>
            </Link>
            <Link to='/people'>
                <Menu.Item name="people"/>
            </Link>
    </Container>
    </Menu>
  )
}

export default Navbar;
