import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { Button, Segment } from 'semantic-ui-react'


function NavBar() {

    return (
        <div>
            <Segment>
                <Button size="huge" inverted color="black" as={ NavLink }
                    to="/"
                    exact>
                        Home
                </Button>
                <Button size="huge" inverted color="black" as={ NavLink }
                    to="/"
                    exact>
                        Top Games of 2022
                </Button>
                <Button size="huge" inverted color="black" as={ NavLink }
                    to="/"
                    exact>
                        Most Anticipated Games of 2023
                </Button>
                <Button size="huge" inverted color="black" as={ NavLink }
                    to="/"
                    exact>
                        Reviews 
                </Button>
            </Segment>
        </div>
    )
}

export default NavBar