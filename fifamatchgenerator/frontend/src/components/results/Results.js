import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getResults } from '../../actions/results';

export class Results extends Component {
    static propTypes = {
        results: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getResults();
    }

    render() {
        return (
            <div>
                <h1>Results List</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    results: state.results.results
});

export default connect(mapStateToProps, { getResults })(Results);