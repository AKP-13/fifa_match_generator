import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addResult } from '../../actions/results'

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

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { opponentName, myTeam, myGoals, opponentGoals, opponentTeam, notes } = this.state;
        const result = {
            opponentName,
            myTeam,
            myGoals,
            opponentGoals,
            opponentTeam,
            notes
        };
        this.props.addResult(result)
    }

    render() {

        const { opponentName, myTeam, myGoals, opponentGoals, opponentTeam, notes } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Result</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Opponent Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="opponentName"
                            onChange={this.onChange}
                            value={opponentName}
                        />
                    </div>
                    <div className="form-group">
                        <label>My Team</label>
                        <input
                            className="form-control"
                            type="text"
                            name="myTeam"
                            onChange={this.onChange}
                            value={myTeam}
                        />
                    </div>
                    <div className="form-group">
                        <label>My Goals</label>
                        <input
                            className="form-control"
                            type="number"
                            min="0"
                            name="myGoals"
                            onChange={this.onChange}
                            value={myGoals}
                        />
                    </div>
                    <div className="form-group">
                        <label>Opponent Goals</label>
                        <input
                            className="form-control"
                            type="number"
                            min="0"
                            name="opponentGoals"
                            onChange={this.onChange}
                            value={opponentGoals}
                        />
                    </div>
                    <div className="form-group">
                        <label>Opponent Team</label>
                        <input
                            className="form-control"
                            type="text"
                            name="opponentTeam"
                            onChange={this.onChange}
                            value={opponentTeam}
                        />
                    </div>
                    <div className="form-group">
                        <label>Notes</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="notes"
                            onChange={this.onChange}
                            value={notes}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
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