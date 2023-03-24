import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import { Header } from 'semantic-ui-react'
import NavBar from './NavBar'
import TopGames from './TopGames'
import AnticipatedGames from './AnticipatedGames'
import Home from './Home'



function App() {
    const [topGames, setTopGames] = useState([])
    const [anticipatedGames, setAnticipatedGames] = useState([])
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
        })
    }, [])

    function handleAddGame(newGame) {
        setAnticipatedGames([...anticipatedGames, newGame])
    }

    function handleUpdateReleaseDate(updatedAnticipatedGame) {
        const updatedAnticipatedGames = anticipatedGames.map((anticipatedGame) => {
            if(anticipatedGame.id === updatedAnticipatedGame.id) {
                return updatedAnticipatedGame
            }
            return anticipatedGame
            
        })
        setAnticipatedGames(updatedAnticipatedGames)
    }

    function handleAddReviewAG(review) {
        const updatedAnticipatedGames = anticipatedGames.map((anticipatedGame) => {
            if(anticipatedGame.id === review.anticipated_game_id) {
                const newReviews = [...anticipatedGame.reviews, review]
                anticipatedGame.reviews = newReviews
            } 
                return anticipatedGame 
        })  
        setAnticipatedGames(updatedAnticipatedGames)
    }

    function handleDeleteReviewAG(review) {
        const updatedAnticipatedGames = anticipatedGames.map((anticipatedGame) => {
            if(anticipatedGame.id === review.anticipated_game_id) {
                const updatedReviewList = anticipatedGame.reviews.filter((rev) => rev.id !== review.id)
                anticipatedGame.reviews = updatedReviewList
            }
                return anticipatedGame
        })
        setAnticipatedGames(updatedAnticipatedGames)
      }
 
    function handleUpdateReviewAG(updatedReview) {
        const updatedAnticipatedGames = anticipatedGames.map((anticipatedGame) =>{
            if(anticipatedGame.id === updatedReview.anticipated_game_id) {
                const updatedAnticipatedGames = anticipatedGame.reviews.map((review) => review.id === updatedReview.id ? updatedReview : anticipatedGame)
                anticipatedGame.reviews = updatedAnticipatedGames
            
            }
                return anticipatedGame
        })
        setAnticipatedGames(updatedAnticipatedGames)
    }

    // top games 

    function handleAddReviewTG(review) {
        const updatedTopGames = topGames.map((topGame) => {
            if(topGame.id === review.top_game_id) {
                const newReviews = [...topGame.reviews, review]
                topGame.reviews = newReviews
            } 
                return topGame 
        })  
        setTopGames(updatedTopGames)
    }

    function handleDeleteReviewTG(review) {
        const updatedTopGames = topGames.map((topGame) => {
            if(topGame.id === review.top_game_id) {
                const updatedReviewList = topGame.reviews.filter((rev) => rev.id !== review.id)
                topGame.reviews = updatedReviewList
            }
                return topGame
        })
        setTopGames(updatedTopGames)
      }

    function handleUpdateReviewTG(updatedReview) {
        const updatedTopGames = topGames.map((topGame) =>{
            if(topGame.id === updatedReview.top_game_id) {
                const updatedTopGames = topGame.reviews.map((review) => review.id === updatedReview.id ? updatedReview : topGame)
                topGame.reviews = updatedTopGames
            
            }
                return topGame
        })
        setTopGames(updatedTopGames)
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
                onAddReview={handleAddReviewAG}
                onDeleteReview={handleDeleteReviewAG}
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                onUpdateReview={handleUpdateReviewAG}
                onAddGame={handleAddGame}
                 />
            </Route>
            <Route exact path="/top_games">
                <TopGames  topGames={topGames} setTopGames={setTopGames}
                onAddReview={handleAddReviewTG}
                onDeleteReview={handleDeleteReviewTG}
                onUpdateReview={handleUpdateReviewTG}/>
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
