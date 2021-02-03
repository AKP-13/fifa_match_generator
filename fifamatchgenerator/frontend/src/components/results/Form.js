import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addResult } from "../../actions/results";

import { Icon, InlineIcon } from "@iconify/react";
import addAlt from "@iconify-icons/carbon/add-alt";
import subtractAlt from "@iconify-icons/carbon/subtract-alt";

import "../../../../styles/Form.css";

export class Form extends Component {
    state = {
        opponentName: "",
        myTeam: "",
        myGoals: "",
        opponentGoals: "",
        opponentTeam: "",
        notes: "",
        add: false,
    };

    static propTypes = {
        addResult: PropTypes.func.isRequired,
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {
            opponentName,
            myTeam,
            myGoals,
            opponentGoals,
            opponentTeam,
            notes,
        } = this.state;

        const result = {
            opponentName,
            myTeam,
            myGoals,
            opponentGoals,
            opponentTeam,
            notes,
        };

        this.props.addResult(result);

        this.setState({
            opponentName: "",
            myTeam: "",
            myGoals: "",
            opponentGoals: "",
            opponentTeam: "",
            notes: "",
            add: false,
        });
    };

    handleClick = (e) => {
        this.setState({
            add: !this.state.add,
        });
    };

    render() {
        const {
            opponentName,
            myTeam,
            myGoals,
            opponentGoals,
            opponentTeam,
            notes,
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4 loginRegisterCard">
                <h2 className="loginRegTitle">
                    Results{" "}
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                        id="addResultButton"
                        onClick={this.handleClick}
                    >
                        {this.state.add ? (
                            <Icon icon={subtractAlt} />
                        ) : (
                            <Icon icon={addAlt} />
                        )}
                    </button>
                </h2>

                <div className="collapse" id="collapseExample">
                    <form onSubmit={this.onSubmit} id="addResultForm">
                        <div className="form-row" id="opponentNameFormRow">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <label htmlFor="opponentName">
                                        Opponent Name{" "}
                                        <span id="asterisk">*</span>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="opponentName"
                                        id="opponentName"
                                        onChange={this.onChange}
                                        value={opponentName}
                                        placeholder="Harvey"
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
                                        placeholder="Spurs"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="opponentTeam">
                                        Opponent Team{" "}
                                        <span id="asterisk">*</span>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="opponentTeam"
                                        id="opponentTeam"
                                        onChange={this.onChange}
                                        value={opponentTeam}
                                        placeholder="Arsenal"
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
                                        className="form-control goals"
                                        type="number"
                                        min="0"
                                        name="myGoals"
                                        id="myGoals"
                                        onChange={this.onChange}
                                        value={myGoals}
                                        placeholder="3"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="opponentGoals">
                                        Opponent Goals{" "}
                                        <span id="asterisk">*</span>
                                    </label>
                                    <input
                                        className="form-control goals"
                                        type="number"
                                        min="0"
                                        name="opponentGoals"
                                        id="opponentGoals"
                                        onChange={this.onChange}
                                        value={opponentGoals}
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-row" id="notesFormRow">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <label htmlFor="notes">Notes</label>
                                    <textarea
                                        className="form-control"
                                        type="text"
                                        name="notes"
                                        id="notes"
                                        onChange={this.onChange}
                                        value={notes}
                                        placeholder="#COYS"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                id="resultsFormSubmitButton"
                            >
                                Add result
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// No need for mSTP in this component as we don't need to bring in results (state)
// We just need to call the action
export default connect(null, { addResult })(Form);
