import React, { Component, Fragment } from 'react';
import { getNation, getLeague, getTeam } from "../../actions/randomiser";

export default class Player1 extends Component {
    state = {
        nationOne: "",
        leagueOne: "",
        teamOne: ""
    }

    nationOneClick = (e) => {
        e.preventDefault();
        fetch("https://raw.githubusercontent.com/AKP-13/fifa21Teams/main/testData.json")
        .then(res => res.json())
        .then(data =>
            this.setState({
                nationOne: getNation(data),
                leagueOne: "",
                teamOne: ""
            })
        )
    }

    leagueOneClick = (e) => {
        e.preventDefault();
        if(this.state.nationOne === ""){
            alert("You must pick a nation first!")
        } else {
            fetch("https://raw.githubusercontent.com/AKP-13/fifa21Teams/main/testData.json")
            .then(res => res.json())
            .then(data => 
                this.setState({
                    nationOne: this.state.nationOne,
                    leagueOne: getLeague(data, this.state.nationOne),
                    teamOne: ""
                })
            )
        }
    }

    teamOneClick = (e) => {
        e.preventDefault();
        if(this.state.nationOne === "" || this.state.leagueOne === ""){
            alert("You must pick a nation and league first!")
        } else {
            fetch("https://raw.githubusercontent.com/AKP-13/fifa21Teams/main/testData.json")
            .then(res => res.json())
            .then(data => 
                this.setState({
                    nationOne: this.state.nationOne,
                    leagueOne: this.state.leagueOne,
                    teamOne: getTeam(data, this.state.nationOne, this.state.leagueOne)
                })
            )
        }
    }

    render(){
        return (
            <Fragment>
                <h1>Player 1</h1>

                <button id="nationOneButton" onClick={this.nationOneClick}>
                    Player 1 nation
                </button>
                {
                    this.state.nationOne &&
                        <h1>
                            Player 1's nation: {this.state.nationOne}
                        </h1>
                }

                <button id="leagueOneButton" onClick={this.leagueOneClick}>
                    Player 1 league
                </button>
                {
                    this.state.nationOne && this.state.leagueOne &&
                        <h1>
                            Player 1's league: {this.state.leagueOne}
                        </h1>
                }

                <button id="teamOneButton" onClick={this.teamOneClick}>
                    Player 1 team
                </button>
                {
                    this.state.nationOne && this.state.leagueOne && this.state.teamOne &&
                        <h1>
                            Player 1's team: {this.state.teamOne}
                        </h1>
                }
                
            </Fragment>
        )
    }
}