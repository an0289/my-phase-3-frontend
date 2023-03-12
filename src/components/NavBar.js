import React from 'react'
import { NavLink } from "react-router-dom"
import { Button, Segment } from 'semantic-ui-react'


function NavBar() {

    return (
        <div>
            <Segment style={{"backgroundColor": "black"}}>
                <Button size="huge" inverted color="violet" as={ NavLink }
                    to="/"
                    exact>
                        Home
                </Button>
                <Button size="huge" inverted color="violet" as={ NavLink }
                    to="/anticipated_games"
                    exact>
                        Most Anticipated Games of 2023
                </Button>
                <Button size="huge" inverted color="violet" as={ NavLink }
                    to="/top_games"
                    exact>
                        Top Games of 2022
                </Button>
                <Button size="huge" inverted color="violet" as={ NavLink }
                    to="/reviews"
                    exact>
                        Reviews 
                </Button>
            </Segment>
        </div>
    )
}

export default NavBar