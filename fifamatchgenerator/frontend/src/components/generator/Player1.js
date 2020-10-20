import React, { Component, Fragment } from 'react';
import { getNation, getLeague, getTeam } from "../../actions/randomiser";
import "../../../../styles/Player1.css"

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
                <div className="card" id="playerOneDiv">
                    <h1 id="player1h1">Player 1</h1>

                    <button id="nationOneButton" onClick={this.nationOneClick}>
                    {
                        this.state.nationOne ?
                            <strong>
                                <h1>
                                    {this.state.nationOne}
                                </h1>
                            </strong>
                            :
                            <h1>
                                Nation
                            </h1>
                    } 
                    </button>
                    

                    <button id="leagueOneButton" onClick={this.leagueOneClick}>
                    {
                        this.state.nationOne && this.state.leagueOne ?
                            <h1>
                                {this.state.leagueOne}
                            </h1>
                            :
                            <h1>
                                League
                            </h1>
                    }
                    </button>
                    

                    <button id="teamOneButton" onClick={this.teamOneClick}>
                    {
                        this.state.nationOne && this.state.leagueOne && this.state.teamOne ?
                            <h1>
                                {this.state.teamOne}
                            </h1>
                            :
                            <h1>
                                Team
                            </h1>
                    }
                    </button>
                    
                </div>
                
            </Fragment>
        )
    }
}