import React, { Component, Fragment } from 'react';
import { getNation, getLeague, getTeam } from "../../actions/randomiser";

export default class Player2 extends Component {
    state = {
        nationTwo: "",
        leagueTwo: "",
        teamTwo: ""
    }

    nationTwoClick = (e) => {
        e.preventDefault();
        fetch("https://raw.githubusercontent.com/AKP-13/fifa21Teams/main/testData.json")
        .then(res => res.json())
        .then(data =>
            this.setState({
                nationTwo: getNation(data),
                leagueTwo: "",
                teamTwo: ""
            })
        )
    }

    leagueTwoClick = (e) => {
        e.preventDefault();
        if(this.state.nationTwo === ""){
            alert("You must pick a nation first!")
        } else {
            fetch("https://raw.githubusercontent.com/AKP-13/fifa21Teams/main/testData.json")
            .then(res => res.json())
            .then(data => 
                this.setState({
                    nationTwo: this.state.nationTwo,
                    leagueTwo: getLeague(data, this.state.nationTwo),
                    teamTwo: ""
                })
            )
        }
    }

    teamTwoClick = (e) => {
        e.preventDefault();
        if(this.state.nationTwo === "" || this.state.leagueTwo === ""){
            alert("You must pick a nation and league first!")
        } else {
            fetch("https://raw.githubusercontent.com/AKP-13/fifa21Teams/main/testData.json")
            .then(res => res.json())
            .then(data => 
                this.setState({
                    nationTwo: this.state.nationTwo,
                    leagueTwo: this.state.leagueTwo,
                    teamTwo: getTeam(data, this.state.nationTwo, this.state.leagueTwo)
                })
            )
        }
    }

    render(){
        return (
            <Fragment>
                <h1>Player 2</h1>

                <button id="nationTwoButton" onClick={this.nationTwoClick}>
                    Player 2 nation
                </button>
                {
                    this.state.nationTwo &&
                        <h1>
                            Player 2's nation: {this.state.nationTwo}
                        </h1>
                }

                <button id="leagueTwoButton" onClick={this.leagueTwoClick}>
                    Player 2 league
                </button>
                {
                    this.state.nationTwo && this.state.leagueTwo &&
                        <h1>
                            Player 2's league: {this.state.leagueTwo}
                        </h1>
                }

                <button id="teamTwoButton" onClick={this.teamTwoClick}>
                    Player 1 team
                </button>
                {
                    this.state.nationTwo && this.state.leagueTwo && this.state.teamTwo &&
                        <h1>
                            Player 2's team: {this.state.teamTwo}
                        </h1>
                }
                
            </Fragment>
        )
    }
}