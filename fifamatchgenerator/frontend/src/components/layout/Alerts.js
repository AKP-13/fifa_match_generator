import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired

    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if(error !== prevProps.error){
            if(error.msg.opponentName) {
                alert.error(`Opponent name: ${error.msg.opponentName.join()}`) //Comes in as an array so we use join to turn to string
            }
            if(error.msg.myTeam) {
                alert.error(`My Team: ${error.msg.myTeam.join()}`)
            }
            if(error.msg.opponentTeam) {
                alert.error(`Opponent Team: ${error.msg.opponentTeam.join()}`)
            }
            if(error.msg.myGoals) {
                alert.error(`My Goals: ${error.msg.myGoals.join()}`)
            }
            if(error.msg.opponentGoals) {
                alert.error(`Opponent Goals: ${error.msg.opponentGoals.join()}`)
            }
            if(error.msg.notes) {
                alert.error(`Notes: ${error.msg.notes.join()}`)
            }
        }

        if(message !== prevProps.message) {
            if(message.deleteResult) {
                alert.success(message.deleteResult)
            }
        }
    }

    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts))
