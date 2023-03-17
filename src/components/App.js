import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import { Header } from 'semantic-ui-react'
import NavBar from './NavBar'
import TopGames from './TopGames'
import AnticipatedGames from './AnticipatedGames'
import Home from './Home'



function App() {
    const [topGames, setTopGames] = useState([])
    const [anticipatedGames, setAnticipatedGames] = useState()
    // const [currentGame, setCurrentGame] = useState([{reviews: []}])
    const [searchWord, setSearchWord] = useState("")
    
    
    
    
    useEffect(() => {
        fetch("http://localhost:9292/top_games")
        .then((r) => r.json())
        .then((topGames) => setTopGames(topGames))
    }, [])

    useEffect(() => {
        fetch("http://localhost:9292/anticipated_games")
        .then((r) => r.json())
        .then((anticipatedGames) => {
            setAnticipatedGames(anticipatedGames)
            console.log(anticipatedGames)
        })
    }, [])


    function handleUpdateReleaseDate(updatedAnticipatedGame) {
        const updatedAnticipatedGames = anticipatedGames.map((anticipatedGame) => {
            if(anticipatedGame.id === updatedAnticipatedGame.id) {
                return updatedAnticipatedGame
            }
            return anticipatedGame
            
        })
        setAnticipatedGames(updatedAnticipatedGames)
    }

    function handleAddReview(review) {
        const updatedAnticipatedGames = anticipatedGames.map((anticipatedGame) => {
            if(anticipatedGame.id === review.anticipated_game_id) {
                const newReviews = [...anticipatedGame.reviews, review]
                anticipatedGame.reviews = newReviews
            } 
                return anticipatedGame 
        })  
        setAnticipatedGames(updatedAnticipatedGames)
    }

    function handleDeleteReview(id) {
        const updatedReviews = anticipatedGames.filter((review) => review.id !== id);
        setAnticipatedGames(updatedReviews);
      }

    function handleUpdateReview(updatedReview) {
        // const updatedReviews = reviews.map((review) => {
        //     if(review.id === updatedReview.id) {
        //         return updatedReview
        //     }
        //     return review
        // })
        // setReviews(updatedReviews)
    }



  return (
    <div style={{ backgroundColor: "black" }}>
        <Header style={{ backgroundColor: "black" }} >
        <NavBar />
        </Header>
        <div>
        <Switch>
            <Route exact path="/anticipated_games">
                <AnticipatedGames  anticipatedGames={anticipatedGames} 
                onUpdateReleaseDate={handleUpdateReleaseDate}
                onAddReview={handleAddReview}
                onDeleteReview={handleDeleteReview}
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                onUpdateReview={handleUpdateReview}
                 />
            </Route>
            <Route exact path="/top_games">
                <TopGames  topGames={topGames} setTopGames={setTopGames}
                onAddReview={handleAddReview}
                onDeleteReview={handleDeleteReview}
                onUpdateReview={handleUpdateReview}/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        </div>
    </div>
   
  )
}

export default App;
