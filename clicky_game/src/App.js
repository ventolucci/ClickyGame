import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import PlayerCard from "./components/MugCard";
import Title from "./components/Title";
import players from "./players.json";
import "./App.css"

class App extends Component {
  state = {
    players,
    score: 0,
    topScore: 0,
    instructions: '',
    guessedPlayers: []
  };

  componentDidMount() {
    this.setState({ instructions: 'Click an image to begin!' });
  }

  shufflePlayers = () => {
    let currentIndex = players.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = players[currentIndex];
      players[currentIndex] = players[randomIndex];
      players[randomIndex] = temporaryValue;
    }

    this.setState({ players });
  };

  handlePlayerClick = player => {
    const currentPlayersGuessed = this.state.guessedPlayers;

    if (currentPlayersGuessed.includes(player)) {
      let instructions = this.state.instructions;
      instructions = 'You guessed incorrect!';
      const score = 0;
      let topScore = this.state.topScore;
      this.setState({
        instructions,
        score,
        topScore,
        guessedPlayers: []
      });
    } else {
      let score = this.state.score;
      score += 1;

      let topScore = this.state.topScore;
      if (this.state.score === this.state.topScore) {
        topScore += 1;
      }

      let instructions = this.state.instructions;
      instructions = "You've guessed correctly!";

      this.setState({
        score,
        topScore,
        instructions,
        guessedPlayers: [...this.state.guessedPlayers, player]
      });
    }
  };

  render() {
    return (
      <div>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          instructions={this.state.instructions}
        />
        <Title />
        <div className="container">
          <div className="row">
            {this.state.players.map(player => (
              <PlayerCard
                shufflePlayers={this.shufflePlayers}
                handlePlayerClick={this.handlePlayerClick}
                id={player.id}
                key={player.name}
                image={player.image}
              />
            ))}
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
