import React, { Component, Fragment } from 'react';
import { getNation, getLeague, getTeam } from "../../actions/randomiser";
import "../../../../styles/Player2.css";

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
                <div className="card" id="playerTwoDiv">
                    <h1>Player 2</h1>

                    <button id="nationTwoButton" onClick={this.nationTwoClick}>
                    {
                        this.state.nationTwo ?
                            <h1>
                                {this.state.nationTwo}
                            </h1>
                            :
                            <h1>
                                <strong>
                                    Nation
                                </strong>
                            </h1>
                    }
                    </button>
                    

                    <button id="leagueTwoButton" onClick={this.leagueTwoClick}>
                    {
                        this.state.nationTwo && this.state.leagueTwo ?
                            <h1>
                                {this.state.leagueTwo}
                            </h1>
                            :
                            <h1>
                                <strong>
                                    League
                                </strong>
                            </h1>
                    }
                    </button>
                    

                    <button id="teamTwoButton" onClick={this.teamTwoClick}>
                    {
                        this.state.nationTwo && this.state.leagueTwo && this.state.teamTwo ?
                            <h1>
                                {this.state.teamTwo}
                            </h1>
                            :
                            <h1>
                                <strong>
                                    Team
                                </strong>
                            </h1>
                    }
                    </button>
                    
                </div>
                
            </Fragment>
        )
    }
}