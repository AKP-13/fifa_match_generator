import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addResult } from '../../actions/results';

import "../../../../styles/Form.css";

export class Form extends Component {
    state = {
        opponentName: '',
        myTeam: '',
        myGoals: '',
        opponentGoals: '',
        opponentTeam: '',
        notes: ''
    }

    static propTypes = {
        addResult: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ 
        [e.target.name]: e.target.value 
    })

    onSubmit = e => {
        e.preventDefault();
        const { 
            opponentName, 
            myTeam, 
            myGoals, 
            opponentGoals, 
            opponentTeam, 
            notes 
        } = this.state;

        const result = {
            opponentName,
            myTeam,
            myGoals,
            opponentGoals,
            opponentTeam,
            notes
        };

        this.props.addResult(result)
        
        this.setState({
            opponentName: "",
            myTeam: "",
            myGoals: "",
            opponentGoals: "",
            opponentTeam: "",
            notes: ""
        })
    }

    render() {

        const { 
            opponentName, 
            myTeam, 
            myGoals, 
            opponentGoals, 
            opponentTeam, 
            notes 
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4" id="resultsForm">
                <h2 id="addResultHeading">
                    Add Result
                </h2>
                <form onSubmit={this.onSubmit} id="addResultForm">
                    <div className="form-row" id="opponentNameFormRow">
                        <div className="col col-md-6">
                            <div className="form-group">
                                <label htmlFor="opponentName">
                                    Opponent Name <span id="asterisk">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="opponentName"
                                    id="opponentName"
                                    onChange={this.onChange}
                                    value={opponentName}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="myTeam">
                                    My Team <span id="asterisk">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="myTeam"
                                    id="myTeam"
                                    onChange={this.onChange}
                                    value={myTeam}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="opponentTeam">
                                    Opponent Team <span id="asterisk">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="opponentTeam"
                                    id="opponentTeam"
                                    onChange={this.onChange}
                                    value={opponentTeam}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="myGoals">
                                    My Goals <span id="asterisk">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="number"
                                    min="0"
                                    name="myGoals"
                                    id="myGoals"
                                    onChange={this.onChange}
                                    value={myGoals}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="opponentGoals">
                                    Opponent Goals <span id="asterisk">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="number"
                                    min="0"
                                    name="opponentGoals"
                                    id="opponentGoals"
                                    onChange={this.onChange}
                                    value={opponentGoals}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-row" id="notesFormRow">
                        <div className="col col-md-6">
                            <div className="form-group">
                                <label htmlFor="notes">
                                    Notes
                                </label>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    name="notes"
                                    id="notes"
                                    onChange={this.onChange}
                                    value={notes}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" id="resultsFormSubmitButton">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

// No need for mSTP in this component as we don't need to bring in results (state)
// We just need to call the action
export default connect(null, { addResult })(Form);