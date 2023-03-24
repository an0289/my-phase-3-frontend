import React, { useState } from 'react'
import { Form, Button, Container, Segment, Label, Divider } from 'semantic-ui-react'

function NewGame({ setIsAdding, isAdding, onAddGame }) {

    // name, image, platforms, release_date: releaseDate, website

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [platforms, setPlatforms] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [website, setWebsite] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setIsAdding(false)
        console.log('submitted')

        fetch("http://localhost:9292/anticipated_games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                image: image,
                platforms: platforms,
                release_date: releaseDate,
                website: website
            }),
        })
          .then((r) => r.json())
          .then((newGame) => {
            onAddGame(newGame)
          })
    }

    return (
    <Container>
    <Segment raised>
    <Label ribbon size="large" color="black">Add Your Most Anticipated Game for 2023</Label>
    <Divider hidden />
    <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Game Title</label>
                    <input 
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Game Title"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Game Title Image</label>
                    <input 
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    name="image"
                    value={image}
                    placeholder="Link to Game's Image" /></Form.Field>
                <Form.Field >
                <label>Available Platforms</label>
                <input 
                    onChange={(e) => setPlatforms(e.target.value)}
                    type="text"
                    name="platforms"
                    value={platforms}
                    placeholder="Available Platforms" />
                </Form.Field>
                <Form.Field >
                    <label>Release Date</label>
                    <input 
                    onChange={(e) => setReleaseDate(e.target.value)}
                    type="text"
                    name="release_date"
                    value={releaseDate}
                    placeholder="Game's Release Date" /></Form.Field>
                <Form.Field >
                    <label>Website</label>
                    <input 
                    onChange={(e) => setWebsite(e.target.value)}
                    type="text"
                    name="website"
                    value={website}
                    placeholder="Link to Game's Wesbsite" /></Form.Field>
        <Button color="blue" type="submit">Submit</Button>
        <Button color="red" onClick={() => setIsAdding((isAdding) => !isAdding)}>Cancel</Button>
    </Form>
    </Segment>
    </Container>
    
    )     


}

export default NewGame